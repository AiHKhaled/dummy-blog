//import http from "http";
const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  const num = _.random(0, 20);
  console.log(num);
  // res.setHeader("Content-type", "text/html");
});
