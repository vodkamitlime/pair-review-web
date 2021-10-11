from email.header import decode_header
from datetime import datetime
import imaplib, re, csv, email, html, os

def download_emails(req_email: str, req_pass: str, req_ext: str): 
    
    filepath = f'./public/{req_email}.csv'
    f = open(filepath, 'w', newline='')
    write = csv.writer(f)
    write.writerow(['#', '날짜', '페어', '스프린트', '잘한 점', '개선할 점'])

    user = req_email
    password = req_pass

    imap = imaplib.IMAP4_SSL("imap.gmail.com")
    imap.login(user, password)

    imap.select("INBOX")

    status, messages = imap.uid('search', None, '(FROM "notifications@typeform.com")')
    messages = messages[0].split()

    print("File downloading..")

    for n, message in enumerate(messages):

        res, msg = imap.uid('fetch', message, "(RFC822)") 
        raw = msg[0][1]
        email_message = email.message_from_bytes(raw) 

        subject, encoding = decode_header(email_message["Subject"])[0]
        subject = subject.decode(encoding) 
        if 'Review' in subject:

            temp, _ = decode_header(email_message.get("Date"))[0] 

            temp = datetime.strptime(temp, '%a, %d %b %Y %H:%M:%S %z')
            date = temp.strftime('%Y년 %m월 %d일')

            match = re.search(r'[가-힣]+님의', subject) 
            pair = match.group() 
            pair = pair[:-2] 

            body = email_message.get_payload(decode=True).decode()
            body = body[:body.rindex('<br/>')].replace('<br/>', ' ').replace('▶︎', '') 
            body = re.sub(r'<[^>]+>', '', body)

            temp_match = re.search(r'아직 [가-힣]+님에게', body)
            if temp_match: 
                temp_start, _ = temp_match.span()
                body = body[:temp_start]

            body = html.unescape(body)

            match = re.search(r'\[[\D]+\]', body) 
            sprint = match.group() if match else '[해당 없음]' 
            if 'Project' in subject:
                sprint = '[Project]'

            match = re.search(r'[가-힣]+님이\s평가한\s[가-힣]+님의\s잘한\s점[ ]*:', body) 
            start_awesome, end_awesome = match.span() 

            match = re.search(r'[가-힣]+님이\s생각한\s[가-힣]+님의\s개선하면\s좋을\s점[ ]*:', body) 
            match = match if match else re.search(r'[가-힣]+님이\s평가한\s[가-힣]+님의\s개선할\s점[ ]*:', body) 
            start_improve, end_improve = match.span()

            awesome = body[end_awesome:start_improve]
            improve = body[end_improve:]

            write.writerow([n, date, pair, sprint, awesome, improve])

    print("File download success")
    f.close()
    imap.close()
    imap.logout()
