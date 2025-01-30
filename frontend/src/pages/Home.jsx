import { useState, useEffect } from "react";
import FileUpload from "@/components/FileUpload";
import ResultCard from "@/components/ResultCard";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Dummy contractors data
const contractorsData = [
  { id: 1, name: "Contractor A", failureType: "Cracks", willingToFix: true },
  { id: 2, name: "Contractor B", failureType: "Rust", willingToFix: true },
  { id: 3, name: "Contractor C", failureType: "Water Leakage", willingToFix: true },
  { id: 4, name: "Contractor D", failureType: "Cracks", willingToFix: false },
  { id: 5, name: "Contractor E", failureType: "Rust", willingToFix: true },
];

const Home = () => {
  const [result, setResult] = useState(null);
  const [selectedFailure, setSelectedFailure] = useState("");

  useEffect(() => {
    if (result) {
      setSelectedFailure(result.failureType);
    }
  }, [result]);

  const filteredContractors = contractorsData.filter(
    (contractor) => contractor.willingToFix && contractor.failureType === selectedFailure
  );

  return (
    <div className="flex flex-col items-center space-y-6 p-6 min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold text-gray-200">Infrastructure Failure Detection</h1>

      {/* File Upload Section */}
      <FileUpload setResult={setResult} />

      {/* Result Display */}
      {result && <ResultCard result={result} />}

      {/* Contractors Section */}
      <div className="w-full max-w-4xl mt-8">
        <h2 className="text-xl font-semibold text-gray-300">Contractors</h2>

        <Card className="w-full bg-gray-900 shadow-lg rounded-lg">
          <CardHeader className="border-b border-gray-700 p-4">
            <h3 className="text-lg font-semibold text-gray-100">
              Available Contractors for {selectedFailure || "..." }
            </h3>
          </CardHeader>
          <CardContent className="p-6">
            {filteredContractors.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredContractors.map((contractor) => (
                  <Link key={contractor.id} to={`/contractor/${contractor.id}`}>
                    <Card className="flex flex-col items-start cursor-pointer bg-gray-800 text-white hover:bg-gray-700 hover:shadow-xl transition-all duration-300 rounded-lg p-4">
                      <CardHeader className="p-2">
                        <h4 className="text-md font-semibold">{contractor.name}</h4>
                      </CardHeader>
                      <CardContent className="p-2">
                        <Badge className="bg-blue-500 text-white">{contractor.failureType}</Badge>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-center">No contractors available for {selectedFailure}.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
