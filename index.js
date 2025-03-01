const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/download", async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: "TikTok video URL is required" });
    }

    try {
        // Example: Using a third-party API (Replace with your own API)
        const response = await axios.get(`https://api.tikwm.com/api/?url=${url}&hd=1`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch video", details: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
