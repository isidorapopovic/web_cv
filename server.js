const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { Pool } = require("pg");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: process.env.FRONTEND_URL || "*",
    })
);

app.use(express.json());

console.log("DATABASE_URL exists:", !!process.env.DATABASE_URL);
console.log("FRONTEND_URL:", process.env.FRONTEND_URL || "not set");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

app.get("/api/health", (req, res) => {
    res.json({ ok: true });
});

app.get("/api/db-test", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW() AS current_time");
        res.json({
            success: true,
            message: "Database connection works.",
            data: result.rows[0],
        });
    } catch (error) {
        console.error("DB test error:", error);
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
});

app.get("/api/messages", async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT 20"
        );

        res.json({
            success: true,
            count: result.rows.length,
            data: result.rows,
        });
    } catch (error) {
        console.error("Read messages error:", error);
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
});

app.post("/api/contact", async (req, res) => {
    try {
        const { firstName, lastName, email, phone, message } = req.body;

        console.log("Incoming contact form:", req.body);

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
            RETURNING *
            `,
            [firstName, lastName, email, phone || null, message]
        );

        console.log("Inserted row:", result.rows[0]);

        return res.status(201).json({
            success: true,
            message: "Message sent successfully.",
            data: result.rows[0],
        });
    } catch (error) {
        console.error("Contact form error:", error);
        return res.status(500).json({
            success: false,
            error: error.message || "Something went wrong while sending your message.",
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});