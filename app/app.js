"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));

app.use(bodyParser.json());
//url에 한글,공백 등 특수문자가 포함되는 경우 인식하지 못하는 문제를 해결
app.use(bodyParser.urlencoded({ extended : true }));

app.use("/", home); //미들웨어  등록 메서드


module.exports = app;
