const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost:27017/purgatories", {useNewUrlParser: true});

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
const hells = [
  {
    name: "szorongas",
    image:
      "https://cdn.pixabay.com/photo/2019/11/05/00/53/cellular-4602489__340.jpg"
  },
  {
    name: "sznobizmus",
    image:
      "https://cdn.pixabay.com/photo/2019/11/10/00/31/empire-state-building-4614731__340.jpg"
  },
  {
    name: "hiszekenyseg",
    image:
      "https://cdn.pixabay.com/photo/2019/10/28/11/47/flowers-4584088__340.jpg"
  }
];
//schema
const purgatoriesSchema = new mongoose.Schema({
  name: String,
  image: String
});
const Purgatories = mongoose.model("Purgatories", purgatoriesSchema);
/* Purgatories.create(
  {
    name: "szorongas",
    image:
      "https://cdn.pixabay.com/photo/2019/11/05/00/53/cellular-4602489__340.jpg"
  },
  (err, purgs) => {
    if (err) {
      console.log(err);
    } else {
      console.log("the new hell is:");
      console.log(purgs);
    }
  }
); */

app.get("/", (req, res) => {
  res.render("landing");
});
app.get("/hells", (req, res) => {
  Purgatories.find({}, (err, purgs) => {
    if (err) {
      console.log(err);
    } else {
      res.render("hells", { hells: purgs });
    }
  });
});
app.post("/hells", (req, res) => {
  const name = req.body.name;
  const image = req.body.image;
  const newHell = { name: name, image: image };
  Purgatories.create(newHell, (err, newItem) => {
    if (err) {
      console.log(err);
    } else {
      //default redirect is to get
      res.redirect("/hells");
    }
  });
});
app.get("/hells/new", (req, res) => {
  res.render("new");
});

app.listen(3000, () => {
  console.log("burn to ethernety!!!");
});
