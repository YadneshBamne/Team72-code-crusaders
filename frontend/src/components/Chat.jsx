import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";

const socket = io("http://localhost:5001"); // Update with your backend server URL

const Chat = ({ contractorId, userId }) => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        // Join the room on connection
        socket.emit("join", { userId });

        // Listen for incoming messages
        socket.on("receiveMessage", (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        // Cleanup on unmount
        return () => {
            socket.off("receiveMessage");
        };
    }, [userId]);

    useEffect(() => {
        // Auto-scroll to the latest message
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = () => {
        if (message.trim()) {
            const newMessage = { sender: userId, text: message };

            // Emit message
            socket.emit("sendMessage", {
                sender: userId,
                receiver: contractorId,
                text: message,
            });

            // Update local chat state
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setMessage("");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200">
            <Card className="w-full max-w-lg shadow-md">
                <CardHeader className="bg-gray-900 text-white text-center py-4 rounded-t-md">
                    <h2 className="text-lg font-semibold">💬 Chat with Contractor</h2>
                </CardHeader>

                <CardContent className="flex flex-col space-y-4 p-4">
                    {/* Messages Container */}
                    <div className="h-64 overflow-y-auto p-2 space-y-2 bg-gray-100 rounded-md shadow-inner">
                        {messages.length > 0 ? (
                            messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`p-2 rounded-lg max-w-xs text-sm ${
                                        msg.sender === userId
                                            ? "bg-blue-500 text-white ml-auto"
                                            : "bg-gray-300 text-black"
                                    }`}
                                    style={{ alignSelf: msg.sender === userId ? "flex-end" : "flex-start" }}
                                >
                                    {msg.text}
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">No messages yet.</p>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Field & Send Button */}
                    <div className="flex items-center space-x-2">
                        <Input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1"
                        />
                        <Button onClick={sendMessage} className="bg-blue-600 text-white px-4 py-2">
                            Send
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Chat;
