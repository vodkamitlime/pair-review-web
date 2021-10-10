from fastapi import FastAPI
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
async def download_file(user: User):
    download_emails(user.email, user.password, user.extension)
    return {"message": "Downloaded emails"}