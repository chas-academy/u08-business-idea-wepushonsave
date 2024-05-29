import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/db"; //was in app.ts moved here and commented out in app.ts
import cors from "cors";
import app from "./app";

connectDB;

dotenv.config();
const port = 3000;



app
  .listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
