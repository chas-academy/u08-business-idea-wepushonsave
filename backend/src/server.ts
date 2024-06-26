import dotenv from "dotenv";
import connectDB from "./db/db";
import app from "./app";

connectDB;

dotenv.config();
const port = 3000;

app
  .listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  })
  .on("error", (error: any) => {
    throw new Error(error.message);
  });
