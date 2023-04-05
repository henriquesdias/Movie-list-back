import express from "express";
import rateLimit from "express-rate-limit";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import moviesRouters from "./routes/movies-routes.js";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

const server = express();

server.use(cors());
server.use(limiter);
server.use(moviesRouters);

server.get("/", (req, res) => {
  res.send("eaaaaaaiiiiiiiiiii");
});

server.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
