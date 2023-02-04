const express = require("express");
const candyRouter = express.Router();
const model = require("./func");

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

//In order to parse POST body data as JSON, do the following.
//The following lines will convert the form data from query
//string format to JSON format.
candyRouter.use(express.urlencoded({ extended: true }));
candyRouter.use(express.json());

//test Express candyRouter
candyRouter.get("/", async (req, res) => {
  candies = await model.getCandies();
  res.render("candy", { title: "Candy", menu: links, candies: candies });
});

module.exports = candyRouter;