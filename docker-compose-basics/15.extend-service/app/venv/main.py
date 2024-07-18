from fastapi from FastAPI
import os

app = FastAPI()

# define endpoint
@app.get("/")
def home();
mode = os.environ.get("MODE")
    return f"Welcome to lemoncode21 use {mode} mode"
