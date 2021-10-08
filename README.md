# Pair Review Web

## 프로젝트 소개
Codestates SEB 수강생들은 매 sprint/pair programming 가 끝날 때마다 pair review 메일을 받습니다. 메일함에 쌓이는 pair review 들을 한 번에 정리할 수 없을까, 하는 고민 끝에 pair review 메일들을 CSV 파일로 저장하는 파이썬 프로젝트가 탄생했습니다. ([vodkamitlime/pair_review](https://github.com/vodkamitlime/pair_review))

<br />
하지만 파이썬이 설치되어 있지 않거나, 파이썬 코드를 실행할 줄 모르는 수강생들이 많아, 이들이 더 편하게 기능을 사용할 수 있는 서비스를 만들어야겠다고 생각했습니다. 그렇게 위의 기능을 웹에 입히는 pair review 웹서비스 프로젝트가 시작되었습니다. 
<br />

## 팀원 소개
<table>
    <tr>
        <td align="center" width="300px" height="160px">
            <a href="https://github.com/vodkamitlime"><img height="100px" width="100px" src="https://avatars.githubusercontent.com/u/75682050?s=460&u=0988d14e9abb4f0105746182fca76a3c1e61de53&v=4" /></a>
            <br />
            <a href="https://github.com/vodkamitlime">vodkamitlime</a>
        </td>
        <td align="center" width="300px" height="160px">
            <a href="https://github.com/bmaner"><img height="100px" width="100px" src="https://avatars.githubusercontent.com/u/78008369?v=4" /></a>
            <br />
            <a href="https://github.com/bmaner">bmaner</a>
        </td>
    </tr>
    <tr>
		<td align="center">
			<a>Haeun</a>
		</td>
	    <td align="center">
	        <a>SeongHyeon</a>
	    </td>
    </tr>
    <tr>
		<td align="center">
			<a>python 으로 csv 파일 저장 기능을 구현하였으며, FastAPI 로 웹서비스의 서버를 구현했습니다.</a>
		</td>
	    <td align="center">
	        <a>React.js 와 Styled Components 로 웹서비스의 프론트엔드를 구현했습니다.</a>
	    </td>
    </tr>
</table>
<br />

## 기능 소개
#### 1.pair review 메일 csv 다운로드
메일함을 일일이 들어갈 필요 없이 이메일 주소, 비밀번호만 입력하면 한 번에 모든 pair review 메일을 하나의 파일(csv)로 다운받아 볼 수 있습니다.
<br />

#### 2. 확장자 선택 (작업 중) 
pdf, csv, xls 등 원하는 확장자를 선택해 다운받을 수 있습니다.
<br />

#### 3. 기간 선택 (작업 중)
선택한 기간에 해당하는 pair review 메일만 다운받을 수 있습니다.
<br />

-----------

## Client
작성중

## Server
1. pip install fastapi
2. pip install uvicorn[standard]
To run server:
3. uvicorn main:app —reload