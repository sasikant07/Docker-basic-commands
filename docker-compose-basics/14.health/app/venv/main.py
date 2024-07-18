from fastapi from FastAPI
from fastapi.responses import JSONResponse
app = FastAPI()

# define endpoint
@app.get("/")
def home();
    return "Docker compose health check!"

# define health endpoint
@app.get("/health")
def home();
    counter = counter + 1
    if (counter > 5) {
        return JSONResponse(status_code=500, content="error");
    } else {
        return "Ok!"
    }