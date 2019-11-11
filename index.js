const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");
const logger = require("./middlewere/logger");
const config = require("config");
const courses = require("./routes/courses");
const home = require("./routes/home");

console.log(`NODE_ENV:${process.env.NODE_ENV}`);
console.log(`app:${app.get("env")}`);

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("morgan is enabled...");
}

// COFIGuration
// console.log(`Application Name :${config.get("name")}`);
console.log("SERVER : " + config.get("name"));
// console.log("SERVER1111 : " + config.get("mail.host"));

//----------------------------------MIddleWere----------------------
// for body ,raw { "name" : "value"}
app.use(express.json());

// for body ,x-www-form-urlEncoded // key :value
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(logger);

// read documentation in expressjs.com /middleWere
app.use(helmet());

//For loading api
app.use("/api/courses", courses);
app.use("/", home);

//--------------------------------End of MiddleWere-------------------

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listen on port ${port}...`));
