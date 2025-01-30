const ResultCard = ({ result }) => {
    if (!result || !result.prediction) {
        return <p className="text-gray-500 text-center">No prediction detected.</p>;
    }

    // Determine certainty level based on confidence score
    let certainty = "Low Certainty";
    let certaintyColor = "text-green-500";
    let riskLevel = "No Risk";
    let suggestion = "No action needed.";

    if (result.confidence > 80) {
        certainty = "High Certainty";
        certaintyColor = "text-red-500";
        if (result.prediction === "Crack") {
            riskLevel = "High Risk";
            suggestion = "Immediate inspection is recommended!";
        }
    } else if (result.confidence > 50) {
        certainty = "Medium Certainty";
        certaintyColor = "text-yellow-500";
        if (result.prediction === "Crack") {
            riskLevel = "Moderate Risk";
            suggestion = "Monitor the area regularly.";
        }
    }

    return (
        <div className="p-4 border rounded shadow-md bg-white">
            <h2 className="text-lg font-bold text-gray-800">🔍 Prediction Result</h2>

            <p className="mt-2 text-gray-800"><strong>Type:</strong> {result.prediction}</p>

            <p className="text-gray-800">Confidence: {Math.round(result.confidence * 100)}%</p>

            <p className={`mt-1 font-semibold text-gray-800 ${certaintyColor}`}>
                <strong>Certainty Level:</strong> {certainty}
            </p>

            <p className="mt-1 text-gray-800"><strong>Risk Level:</strong> {riskLevel}</p>

            <p className="mt-2 text-gray-700"><strong>🛠️ Suggestion:</strong> {suggestion}</p>

            <p className="mt-2 text-sm text-gray-500">🕒 Timestamp: {new Date().toLocaleString()}</p>
        </div>
    );
};

export default ResultCard;
