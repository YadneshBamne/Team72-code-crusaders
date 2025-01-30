import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from model import get_model

# Define dataset paths
train_dir = "dataset/train"
val_dir = "dataset/val"
batch_size = 16
image_size = (224, 224)

# Data augmentation
datagen = ImageDataGenerator(rescale=1.0/255)

# Load dataset
train_generator = datagen.flow_from_directory(train_dir, target_size=image_size, batch_size=batch_size, class_mode="sparse")
val_generator = datagen.flow_from_directory(val_dir, target_size=image_size, batch_size=batch_size, class_mode="sparse")

# Get the model
model = get_model(num_classes=len(train_generator.class_indices))

# Train the model
model.fit(train_generator, validation_data=val_generator, epochs=10)

# Save trained model
model.save("backend/models/mobilenet_v2_tf.h5")
print("Training completed. Model saved as mobilenet_v2_tf.h5")
