from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import torch
import torchvision.transforms as transforms
from PIL import Image
import io
from models.model import load_model, predict_image

app = FastAPI()

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load trained model
model = load_model()

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    image = await file.read()
    image = Image.open(io.BytesIO(image))
    label, confidence = predict_image(model, image)
    
    return {
        "prediction": label,
        "confidence": confidence
    }
