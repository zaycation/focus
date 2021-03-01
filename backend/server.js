const express = require("express");
const blogPosts = require("./data/blogPosts");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/posts", (req, res) => {
  res.json(blogPosts);
});

app.get("/api/posts/:id", (req, res) => {
  const blogPost = blogPosts.find((p) => p._id === req.params.id);
  res.json(blogPost);
});

app.listen(5000, console.log("Server running on port 5k"));
