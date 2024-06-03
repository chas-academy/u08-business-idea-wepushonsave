import dotenv from "dotenv";
import connectDB from "./db/db";
import app from "./app";

connectDB;

dotenv.config();
const port = 3000;

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app
  .listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
