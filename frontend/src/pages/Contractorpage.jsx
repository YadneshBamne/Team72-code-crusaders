import { useParams } from "react-router-dom";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Chat from "@/components/Chat"; // Import the Chat component

// Dummy contractors data
const contractorsData = [
  { id: 1, name: "Contractor A", failureType: "Cracks", details: "Expert in crack repairs" },
  { id: 2, name: "Contractor B", failureType: "Rust", details: "Specializes in rust treatment" },
  { id: 3, name: "Contractor C", failureType: "Water Leakage", details: "Waterproofing solutions" },
  { id: 4, name: "Contractor D", failureType: "Cracks", details: "Masonry repair expert" },
  { id: 5, name: "Contractor E", failureType: "Rust", details: "Corrosion prevention professional" },
];

const ContractorPage = () => {
  const { id } = useParams();
  const contractor = contractorsData.find((c) => c.id === parseInt(id));

  const userId = "Yadnesh"; // Replace with actual user ID

  if (!contractor) {
    return <p className="text-red-500 text-center text-lg">Contractor not found.</p>;
  }

  return (
    <div className="flex flex-col items-center p-6 space-y-6 min-h-screen bg-black text-white">
      {/* Contractor Details Card */}
      <Card className="w-full max-w-lg bg-gray-900 text-white shadow-lg rounded-lg">
        <CardHeader className="border-b border-gray-700 p-4">
          <h2 className="text-xl font-bold text-center">{contractor.name}</h2>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <p><strong className="text-blue-400">Expertise:</strong> {contractor.failureType}</p>
          <p><strong className="text-blue-400">Details:</strong> {contractor.details}</p>
        </CardContent>
      </Card>

      {/* Chat Section */}
      <h3 className="text-lg font-semibold text-gray-300">💬 Chat with {contractor.name}</h3>
      <div className="w-full max-w-lg bg-gray-900 shadow-2xl p-4 rounded-2xl">
        <Chat contractorId={contractor.id} userId={userId} />
      </div>
    </div>
  );
};

export default ContractorPage;
