import os
from bing_image_downloader import downloader

# Define categories and number of images per category
categories = {
    "Crack": 50,
    "Rust": 50,
    "Water Damage": 50,
    "Structural Failure": 50
}

# Set dataset folder
dataset_path = os.path.join("..", "..", "dataset", "train")  # Adjust path as needed
os.makedirs(dataset_path, exist_ok=True)

# Download images
for category, num_images in categories.items():
    category_path = os.path.join(dataset_path, category)
    os.makedirs(category_path, exist_ok=True)
    
    print(f"Downloading {num_images} images for: {category}...")
    downloader.download(category, limit=num_images, output_dir=dataset_path, adult_filter_off=True, force_replace=False)

print("Image download complete! Images saved in the 'dataset/train' folder.")
