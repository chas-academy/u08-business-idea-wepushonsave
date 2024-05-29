import express from "express";
import dotenv from "dotenv";
import jwt from 'jsonwebtoken';
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = 3000;

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

startApp();
