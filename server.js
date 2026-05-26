// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the template engine
app.set("view engine", "ejs");

// Set views directory for EJS files
app.set("views", path.join(__dirname, "views"));

// Serve static files from the "public" folder (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Route for the index page
app.get("/", (req, res) => {
  // You can also pass data here if needed
  res.render("index", {
    title: "Welcome to My Website",
    message: "Hello from EJS!",
  });
});

// Example route for testing other pages (optional)
app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

// Handle 404
app.use((req, res) => {
  res.status(404).render("404", { title: "Page Not Found" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
