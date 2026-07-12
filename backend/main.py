from fastapi import FastAPI

app = FastAPI()


@app.get("/request")
def get_request():
    return "app: done"
