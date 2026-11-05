const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = 5000;

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
  console.log("Server running on http://localhost:5000");
  console.log("---------------------------------");
  console.log("Actor API   : http://localhost:5000/api/actor");
  console.log("Movies API  : http://localhost:5000/api/movies");
  console.log("Career API  : http://localhost:5000/api/career");
  console.log("Awards API  : http://localhost:5000/api/awards");
  console.log("Gallery API : http://localhost:5000/api/gallery");
  console.log("=================================");
});

// =========================
// HOME / TEST API
// =========================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "STARVERSE BACKEND IS RUNNING",
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
        message: "Failed to fetch actor data",
        error: err.message,
      });
    }

    res.json({
      success: true,
      data: results,
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
        message: "Failed to fetch movies",
        error: err.message,
      });
    }

    res.json({
      success: true,
      data: results,
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
        message: "Failed to fetch career timeline",
        error: err.message,
      });
    }

    res.json({
      success: true,
      data: results,
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
        message: "Failed to fetch awards",
        error: err.message,
      });
    }

    res.json({
      success: true,
      data: results,
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
        message: "Failed to fetch gallery",
        error: err.message,
      });
    }

    res.json({
      success: true,
      data: results,
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
      "/api/gallery",
    ],
  });
});

// =========================
// 404 ROUTE
// =========================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.originalUrl,
  });
});

// =========================
// START SERVER
// =========================

app.listen(PORT, () => {
  console.log("---------------------------------");
  console.log(`StarVerse Backend listening on port ${PORT}`);
  console.log("---------------------------------");
});
