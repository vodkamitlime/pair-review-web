from fastapi import FastAPI, BackgroundTasks
from fastapi.responses import FileResponse
from pydantic import BaseModel
from downloads import download_emails

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

class User(BaseModel):
    email: str
    password: str
    extension: str

@app.post("/download")
def download_file(user: User, background_tasks: BackgroundTasks):
    # background_tasks.add_task()
    download_emails(user.email, user.password, user.extension)
    return {'hello':'world'}
    # return FileResponse(path=f'./public/{user.email}.csv', filename='pair_review.csv', media_type='application/csv')
