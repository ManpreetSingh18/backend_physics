// module
const express = require('express');
const hbs = require("hbs");
const path = require("path");
const conn = require("./db/mongodb");
const Register = require("./models/registers");

// Creating express object
const app = express();

const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../public/templates/views');

app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templatePath);
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));


app.get("/", (req, res) => {
  res.render("signup")
})
app.get("/login", (req, res) => {
  res.render("login")
})

app.get("/ohms", (req, res) => {
  res.render("ohms")
})
app.get("/energy", (req, res) => {
  res.render("energy")
})
//finding the resistance of given wire
app.get("/meter", (req, res) => {
  res.render("meter")
})
//P5-Verifying law of series combination of resistance using meter bridge
app.get("/p5", (req, res) => {
  res.render("p5")
})

//P6-To compare emf of two given primary cells using potentiometer
app.get("/p6", (req, res) => {
  res.render("p6")
})
//P7-To determine density of solid using sonometer
app.get("/p7", (req, res) => {
  res.render("p7")
})
//P8-Measurement thickness of a given sheet
app.get("/p8", (req, res) => {
  res.render("p8")
})

//P9-Callibrate thermo couple
app.get("/p9", (req, res) => {
  res.render("p9")
})

app.post("/signup", async (req, res) => {
  const registerUser = new Register({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
  //console.log("Working")
  //giving data to mongo db
  const registered = await registerUser.save();
  // await collection.insertMany([data])
  res.render("home");
})

app.post("/login", async (req, res) => {
  try {
    const check = await Register.findOne({
      email: req.body.email
    })
    console.log(check.password)
    console.log(req.body.password)
    if (check.password === req.body.password) {
      res.render("home");
    } else {
      res.send("Wrong password")
    }
  } catch {
    res.send("Wrong details//user does not exit")
  }
})


app.listen(3000, () => {
  console.log("Port Connected")
})
