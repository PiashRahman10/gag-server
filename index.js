const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");
const port =  5000;

// Import routes


// middleware
app.use(
    cors({
        origin: ["http://localhost:5173"],
        credentials: true,
    })
);
app.use(express.json());
app.use(cookieParser());

// Basic route
app.get("/", (req, res) => {
    res.send("GAG server is working properly");
});

// Use routes


// Connect to database and start server

        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    