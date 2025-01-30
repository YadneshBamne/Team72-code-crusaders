import { useState } from "react";
import { predictImage } from "../api/api";
import { Button } from "./ui/button";

const FileUpload = ({ setResult }) => {
    const [file, setFile] = useState(null);

    const handleUpload = async () => {
        if (!file) return;
        const result = await predictImage(file);
        setResult(result);
    };

    return (
        <div className="flex flex-col items-center space-y-4 p-4 border rounded bg-white">
            <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
                className="bg-white text-black"
            />
            <Button onClick={handleUpload}>Upload & Predict</Button>
        </div>
    );
};

export default FileUpload;


// import React from "react";

// // Dummy FileUpload Component to simulate the image upload process
// const FileUpload = ({ setResult }) => {
//   const handleUpload = async (event) => {
//     // Simulating image upload and prediction
//     const predictedResult = await simulatePrediction(event.target.files[0]);

//     // Set the result state with the predicted failure type
//     setResult(predictedResult);
//   };

//   // Simulate prediction function, should be replaced with actual model inference
//   const simulatePrediction = (file) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         // Simulate a crack detection
//         resolve({ failureType: "Cracks" }); // Update as per your actual model
//       }, 2000);
//     });
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleUpload} />
//     </div>
//   );
// };

// export default FileUpload;

