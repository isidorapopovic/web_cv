const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { Pool } = require("pg");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

app.get("/api/health", (req, res) => {
    res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
    try {
        const { firstName, lastName, email, phone, message } = req.body;

        if (!firstName || !lastName || !email || !message) {
            return res.status(400).json({
                success: false,
                error: "First name, last name, email, and message are required.",
            });
        }

        const result = await pool.query(
            `
            INSERT INTO contact_messages
            (first_name, last_name, email, phone, message)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, first_name, last_name, email, phone, message, created_at
            `,
            [firstName, lastName, email, phone || null, message]
        );

        res.status(201).json({
            success: true,
            message: "Message sent successfully.",
            data: result.rows[0],
        });
    } catch (error) {
        console.error("Contact form error:", error);
        res.status(500).json({
            success: false,
            error: "Something went wrong while sending your message.",
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});