﻿# Team Name/Number - YadneshBamne-Team72-code-crusaders
# **Infrastructure Failure Detection System**

## **Overview**
This project is a **React + Vite web application** that allows users to upload images of **infrastructure failures** (e.g., cracks, rust, corrosion). These images are analyzed by a **Convolutional Neural Network (CNN)** model, specifically **MobileNetV2**, to predict the **alert type** and suggest **preventive measures**.

## **Features**
- ✅ **User-Friendly Interface** – Built using **React + Vite** with **ShadCN for UI**, ensuring a modern and responsive design.
- ✅ **Image Upload & Analysis** – Users can upload images of damaged infrastructure for automated failure detection.
- ✅ **AI-Powered Predictions** – A **TensorFlow-based MobileNetV2 model** predicts the type of failure and provides recommendations.
- ✅ **Model Training & Implementation** – The backend handles model training and inference, integrating with `train.py`, `model.py`, and `predict.py`.
- ✅ **Contractor Messaging System** – Users can connect with contractors via a dedicated **contractor details page (`/contractor/:id`)** and request quotations.
- ✅ **Real-Time Chat with Contractors** – Uses **Socket.io** to enable instant messaging between users and contractors.

## **Tech Stack**
- **Frontend:** React + Vite, ShadCN (UI components)
- **Backend:** Node.js, Express.js
- **AI Model:** TensorFlow (MobileNetV2)
- **Real-Time Communication:** Socket.io
- **Database:** MongoDB (or preferred database)

## **Installation & Setup**
### **1. Clone the Repository**
```sh
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd YOUR-REPO
```

### **2. Install Dependencies**
#### **Frontend**
```sh
cd frontend
npm install
npm run dev
```

#### **Backend**
```sh
cd backend
pip install -r requirements.txt
uvicorn main:app --reload   
```

## **Usage**
1. Upload an image of infrastructure damage.
2. The AI model analyzes the image and predicts the failure type.
3. The system suggests preventive measures.
4. Users can message contractors for repair quotations.
5. Contractors and users can chat in real-time.

## **Contributing**
Contributions are welcome! Feel free to submit a pull request or report issues.

## **License**
This project is licensed under the **MIT License**.

---
🚀 **Early detection of infrastructure damage can save costs and improve safety!**


 
