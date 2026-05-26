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

// Parse URL-encoded bodies (for contact form)
app.use(express.urlencoded({ extended: true }));

// Route for the index page
app.get("/", (req, res) => {
  res.render("index", {
    title: "Age Calculator - Global Age Systems",
  });
});

// Route for About Us page
app.get("/about", (req, res) => {
  res.render("about", { title: "About Us - Age Calculator" });
});

// Route for Privacy Policy page
app.get("/privacy", (req, res) => {
  res.render("privacy", { title: "Privacy Policy - Age Calculator" });
});

// Route for Terms & Conditions page
app.get("/terms", (req, res) => {
  res.render("terms", { title: "Terms & Conditions - Age Calculator" });
});

// Route for Contact Us page (GET)
app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Us - Age Calculator" });
});

// Route for Contact Us form submission (POST)
app.post("/contact", (req, res) => {
  const { name, email, subject, message } = req.body;
  // In a real app, you would send an email or store the message here
  console.log("Contact form submission:");
  console.log(`  Name: ${name}`);
  console.log(`  Email: ${email}`);
  console.log(`  Subject: ${subject}`);
  console.log(`  Message: ${message}`);
  res.render("contact", {
    title: "Contact Us - Age Calculator",
    success: "Thank you for your message! We will get back to you soon.",
  });
});

// Handle 404
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
