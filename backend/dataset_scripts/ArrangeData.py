import os
import shutil
import random

# Define paths
source_folder = "../dataset/raw"
train_folder = "../dataset/train"
val_folder = "../dataset/val"

# Validation split percentage
VAL_SPLIT = 0.2

# Classes and their corresponding source folders
classes = {
    "Crack": "Positive",
    "No_Crack": "Negative"
}

# Function to split and move images
def split_and_move(class_name, source_subfolder):
    source_path = os.path.join(source_folder, source_subfolder)
    train_class_path = os.path.join(train_folder, class_name)
    val_class_path = os.path.join(val_folder, class_name)

    os.makedirs(train_class_path, exist_ok=True)
    os.makedirs(val_class_path, exist_ok=True)

    images = os.listdir(source_path)
    random.shuffle(images)

    val_size = int(len(images) * VAL_SPLIT)

    for img in images[:val_size]:  
        shutil.move(os.path.join(source_path, img), os.path.join(val_class_path, img))

    for img in images[val_size:]:  
        shutil.move(os.path.join(source_path, img), os.path.join(train_class_path, img))

# Process each class
for class_name, source_subfolder in classes.items():
    split_and_move(class_name, source_subfolder)

print("Dataset organized successfully!")
