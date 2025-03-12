const express = require("express");
const app = express();
app.use(express.json());

const events = [];

app.post("/events", (req, res) => {
    const { name, description, date, category } = req.body;
    if (!name || !date) {
        return res.status(400).json({ message: "Name and date are required" });
    }
    const event = { id: events.length + 1, name, description, date, category };
    events.push(event);
    res.status(201).json(event);
});

app.get("/events", (req, res) => {
    res.json(events);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
