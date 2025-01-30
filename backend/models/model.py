import torch
import torchvision.models as models
import torchvision.transforms as transforms
from PIL import Image

# Load a pre-trained ResNet50 model
def load_model():
    model = models.resnet50(pretrained=True)
    model.eval()  # Set the model to inference mode
    return model

# Transform input image
def transform_image(image):
    transform = transforms.Compose([
        transforms.Resize((224, 224)),
        transforms.ToTensor(),
    ])
    return transform(image).unsqueeze(0)  # Add batch dimension

# Predict function
def predict_image(model, image):
    image = transform_image(image)
    outputs = model(image)
    _, predicted_class = outputs.max(1)  # Get class index
    confidence = torch.nn.functional.softmax(outputs, dim=1)[0][predicted_class].item()
    
    classes = ["Crack", "Rust", "Water Damage", "Structural Failure"]  # Custom labels
    label = classes[predicted_class % len(classes)]  # Get prediction label
    
    return label, confidence
