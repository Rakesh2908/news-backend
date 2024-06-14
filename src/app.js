const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");

const app = express()

const allowedOrigins = [
  "https://rakesh-news-aggregator.vercel.app",
  "http://localhost:3000" // Add localhost for development
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.use(express.urlencoded({extended: true}))

app.use("/", routes)

module.exports = app
