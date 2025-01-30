from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
import os

app = Flask(__name__)

# Load trained model
model = load_model("backend/models/mobilenet_v2_tf.h5")

# Define class labels
class_labels = ["No_Crack", "Crack"]

def preprocess_image(img_path):
    img = image.load_img(img_path, target_size=(224, 224))
    img_array = image.img_to_array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)  # Expand to batch size
    return img_array

@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    img_path = "temp.jpg"
    file.save(img_path)

    img_array = preprocess_image(img_path)
    predictions = model.predict(img_array)
    
    result = class_labels[np.argmax(predictions)]
    confidence = 100 * np.max(predictions)

    return jsonify({"prediction": result, "confidence": f"{confidence:.2f}%"})

if __name__ == "__main__":
    app.run(debug=True)
