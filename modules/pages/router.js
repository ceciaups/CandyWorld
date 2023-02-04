const express = require("express");
const pageRouter = express.Router();

var links = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Candy",
    path: "/candy"
  }
];

pageRouter.get("/", (req, res) => {
  res.render("index", { title: "Home", menu: links });
});
pageRouter.get("/about", (req, res) => {
  res.render("about", { title: "About", menu: links });
});

module.exports = pageRouter;