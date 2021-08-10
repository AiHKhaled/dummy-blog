const express = require("express");

const app = express();
const blogRoutes = require("./routes/blogRoutes");

//connecting to mongoDB
const mongoose = require("mongoose");
const dbURI =
  "mongodb+srv://elijah:1234@nodetuto.iwqfh.mongodb.net/node-tuto?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((error) => console.log(error));

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.use("/blogs", blogRoutes);

app.use((req, res) => {
  res.status(404).render("404"), { title: "Error" };
});
