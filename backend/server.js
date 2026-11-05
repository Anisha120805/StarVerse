
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Render deployment port / Local development port
const PORT = process.env.PORT || 5000;

// =========================
// MIDDLEWARE
// =========================

app.use(cors());
app.use(express.json());

// =========================
// MYSQL DATABASE
// =========================

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "starverse",
  port: Number(process.env.DB_PORT) || 3306
});

// =========================
// DATABASE CONNECTION
// =========================

db.connect((err) => {
  if (err) {
    console.error("=================================");
    console.error("MySQL Database Connection Failed");
    console.error("=================================");
    console.error(err.message);
    return;
  }

  console.log("=================================");
  console.log("STARVERSE BACKEND SERVER");
  console.log("=================================");
  console.log("MySQL Database Connected");
  console.log(`Server running on port ${PORT}`);
  console.log("---------------------------------");
  console.log("Actor API   : /api/actor");
  console.log("Movies API  : /api/movies");
  console.log("Career API  : /api/career");
  console.log("Awards API  : /api/awards");
  console.log("Gallery API : /api/gallery");
  console.log("=================================");
});

// =========================
// HOME / TEST API
// =========================

app.get("/", (req, res) => {
  res.json({
    success: true,
    project: "StarVerse",
    message: "STARVERSE BACKEND IS RUNNING"
  });
});

// =========================
// ACTOR API
// =========================

app.get("/api/actor", (req, res) => {
  const sql = `
    SELECT *
    FROM actors
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Actor API Error:", err.message);

      return res.status(500).json({
        success: false,
        message: "Failed to fetch actor data"
      });
    }

    res.json({
      success: true,
      data: results
    });
  });
});

// =========================
// MOVIES API
// =========================

app.get("/api/movies", (req, res) => {
  const sql = `
    SELECT
      movie_id AS id,
      actor_id,
      movie_name AS title,
      release_year AS year,
      role_name AS role,
      genre,
      poster_image AS image,
      description,
      rating
    FROM movies
    WHERE movie_name IS NOT NULL
      AND movie_name != ''
    ORDER BY release_year ASC, movie_id ASC
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Movies API Error:", err.message);

      return res.status(500).json({
        success: false,
        message: "Failed to fetch movies"
      });
    }

    res.json({
      success: true,
      data: results
    });
  });
});

// =========================
// CAREER API
// =========================

app.get("/api/career", (req, res) => {
  const sql = `
    SELECT
      timeline_id,
      actor_id,
      timeline_year AS year,
      title,
      description
    FROM career_timeline
    ORDER BY timeline_year ASC
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Career API Error:", err.message);

      return res.status(500).json({
        success: false,
        message: "Failed to fetch career timeline"
      });
    }

    res.json({
      success: true,
      data: results
    });
  });
});

// =========================
// AWARDS API
// =========================

app.get("/api/awards", (req, res) => {
  const sql = `
    SELECT
      award_id,
      actor_id,
      award_name,
      award_year,
      category,
      movie_name,
      description
    FROM awards
    ORDER BY award_year ASC
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Awards API Error:", err.message);

      return res.status(500).json({
        success: false,
        message: "Failed to fetch awards"
      });
    }

    res.json({
      success: true,
      data: results
    });
  });
});

// =========================
// GALLERY API
// =========================

app.get("/api/gallery", (req, res) => {
  const sql = `
    SELECT
      image_id,
      actor_id,
      image_url,
      image_title,
      image_type,
      description
    FROM gallery
    ORDER BY image_id ASC
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Gallery API Error:", err.message);

      return res.status(500).json({
        success: false,
        message: "Failed to fetch gallery"
      });
    }

    res.json({
      success: true,
      data: results
    });
  });
});

// =========================
// API INFORMATION
// =========================

app.get("/api", (req, res) => {
  res.json({
    success: true,
    project: "StarVerse",
    status: "Backend API is working",
    endpoints: [
      "/api/actor",
      "/api/movies",
      "/api/career",
      "/api/awards",
      "/api/gallery"
    ]
  });
});

// =========================
// 404 ROUTE
// =========================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.originalUrl
  });
});

// =========================
// START SERVER
// =========================

app.listen(PORT, "0.0.0.0", () => {
  console.log("---------------------------------");
  console.log(`StarVerse Backend running on port ${PORT}`);
  console.log("---------------------------------");
});
