const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");

const app = express()

app.use(cors({ origin: 'https://rakesh-news-aggregator.vercel.app/', credentials: true }));

app.use(express.urlencoded({extended: true}))

app.use("/", routes)

module.exports = app
