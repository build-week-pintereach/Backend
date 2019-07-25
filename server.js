const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(express());
server.use(express.json());
server.use(helmet());
server.use(cors());
// server.use(logger());

server.get("/", (req, res) => {
	res.send(`<h1>THE SERVER IS LIVE!</h1>`);
});

// # Define Routes # //
server.use("/api/auth", require("./auth/auth-router")); // REGISTRATION & LOGIN
server.use("/api/articles", require("./routes/articles-route")); // Article Route

// # Logger # //
// function logger(req, res, next) {
//   console.log(` [${new Date().toISOString()}] ${req.method} to ${req.url}`);
//   next();
// }

module.exports = server;
