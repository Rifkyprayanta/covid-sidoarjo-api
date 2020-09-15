const express = require("express");
const fs = require("fs");
const app = express();
const mongoose = require("mongoose");
const { json } = require("express");

const covidRouter = require("./routes/covidRoutes");
const kecamatanRouter = require("./routes/kecamatanRoutes");

app.use(express.json());
app.use("/api", covidRouter);
app.use("/kecamatan", kecamatanRouter);

module.exports = app;
