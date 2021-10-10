from fastapi import FastAPI
from pydantic import BaseModel

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
    return user