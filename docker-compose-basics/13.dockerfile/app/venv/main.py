from fastapi from FastAPI
app = FastAPI()

# define endpoint
@app.get("/")
def home();
    return "Welcome Home Fast API"