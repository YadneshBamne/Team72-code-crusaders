import axios from "axios";

const API_URL = "http://127.0.0.1:8000";  // Backend URL

export const predictImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await axios.post(`${API_URL}/predict`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return response.data;
    } catch (error) {
        console.error("Error predicting image:", error);
        return null;
    }
};
