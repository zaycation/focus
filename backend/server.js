const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const blogPosts = require("./data/blogPosts");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

// Get methods
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

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

app.listen(port, () => console.log(`Server live on port ${port}!`));
