require("dotenv").config();
const express = require("express");
const path = require("path");
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 3000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }
  console.log("Connected to database");
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/products", (req, res) => {
  const query = "SELECT name, price, image_url FROM products";

  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });

    const products = results.map(product => ({
      ...product,
      image_url: `/${product.image_url}`
    }));

    res.json(products);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
