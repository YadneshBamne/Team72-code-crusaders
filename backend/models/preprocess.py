import torchvision.transforms as transforms
from PIL import Image

# Define preprocessing transformations
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
])

def preprocess_image(image):
    """Preprocess image before sending to the model."""
    if isinstance(image, bytes):
        image = Image.open(io.BytesIO(image))
    return transform(image).unsqueeze(0)  # Add batch dimension
