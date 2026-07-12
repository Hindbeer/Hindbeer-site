from enum import Enum

from fastapi import FastAPI

app = FastAPI()


class ModelName(str, Enum):
    start = "#ffff"
    end = "#bbbbb"


@app.get("/status/{name}")
async def get_status(color: ModelName) -> None:
    return {"message": f"Hello {color}"}
