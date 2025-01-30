const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173", // React frontend URL
        methods: ["GET", "POST"]
    }
});

app.use(express.json());
app.use(cors());

const contractors = [
    { id: 1, name: "Contractor A", failureType: "Cracks", details: "Expert in crack repairs" },
    { id: 2, name: "Contractor B", failureType: "Rust", details: "Specializes in rust treatment" },
    { id: 3, name: "Contractor C", failureType: "Water Leakage", details: "Waterproofing solutions" },
    { id: 4, name: "Contractor D", failureType: "Cracks", details: "Masonry repair expert" },
    { id: 5, name: "Contractor E", failureType: "Rust", details: "Corrosion prevention professional" },
];

// Route to get filtered contractors
app.get("/api/contractors", (req, res) => {
    const { type } = req.query;
    const filteredContractors = contractors.filter(c => c.failureType === type);
    res.json(filteredContractors);
});

// Socket.io for real-time messaging
io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("sendMessage", (data) => {
        console.log("Message received:", data);
        io.emit("receiveMessage", data); // Send message to all connected users
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

const PORT = 5001;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
