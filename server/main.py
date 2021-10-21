from fastapi import FastAPI, BackgroundTasks
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from downloads import download_emails

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

class User(BaseModel):
    email: str
    password: str
    extension: str

@app.post("/download")
def download_file(user: User, background_tasks: BackgroundTasks):

    # download_emails(user.email, user.password, user.extension)
    return FileResponse(path=f'./public/{user.email}.csv')



# from fastapi import FastAPI, UploadFile, File

# app = FastAPI()

# @app.post("/file")
# async def upload_file(file: UploadFile = File(...)):
#     # Do here your stuff with the file
#     return {"filename": file.filename}
