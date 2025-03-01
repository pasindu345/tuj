const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.get("/download", async (req, res) => {
    const { url } = req.query;
    
    if (!url) {
        return res.status(400).json({ error: "TikTok URL is required!" });
    }

    try {
        // Example API call (replace with actual TikTok video download logic)
        const response = await axios.get(`https://api.example.com/tiktok?url=${url}`);

        res.json({ video_url: response.data.download_link });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: "Failed to download video. Try again later!" });
    }
});

module.exports = app;
