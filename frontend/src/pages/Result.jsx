import { useLocation } from "react-router-dom";

const Result = () => {
    const location = useLocation();
    const result = location.state?.result || null;

    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-2xl font-bold">Prediction Results</h1>
            {result ? (
                <div className="p-6 border rounded-lg shadow-md mt-4">
                    <p className="text-lg">Type: <strong>{result.prediction}</strong></p>
                    <p className="text-lg">Confidence: <strong>{Math.round(result.confidence * 100)}%</strong></p>
                </div>
            ) : (
                <p className="text-lg text-gray-500 mt-4">No prediction data available.</p>
            )}
        </div>
    );
};

export default Result;
