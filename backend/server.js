import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Create MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || "", // empty password works fine
  database: process.env.DB_NAME,
});

// ✅ Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("❌ MySQL Connection Error:", err);
  } else {
    console.log("✅ MySQL Connected!");
  }
});
app.get("/test-db", (req, res) => {
  db.query("SELECT 1 + 1 AS result", (err, results) => {
    if (err) {
      console.error("❌ Database test failed:", err);
      return res.status(500).json({ error: "Database connection failed" });
    }
    res.json({ success: true, result: results[0].result });
  });
});
app.post("/demo/api/form/contact-us-food-website", (req, res) => {
  const { name, email, phone, company, inquiryType, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill in all required fields." });
  }

  const sql = `INSERT INTO contact_messages (name, email, phone, company, inquiryType, message) VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(sql, [name, email, phone, company, inquiryType, message], (err, result) => {
    if (err) {
      console.error("❌ Error saving contact message:", err);
      return res.status(500).json({ error: "Database error while saving message." });
    }
    console.log("✅ New contact message saved:", result.insertId);
    res.status(200).json({ success: true, message: "Message received successfully!" });
  });
});


// ✅ Example route to check if server works
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
