import dotenv from "dotenv";
import userRouter from "./api/User";
import express from "express";
import connectDB from "./db/db"; //was in app.ts moved here and commented out in app.ts
import cors from "cors";

connectDB; //was in app.ts moved here and commented out in app.ts

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

// Allows cookies to be sent
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.urlencoded({ extended: true }));

app.use(express.json())

app.get("/test", (req, res) => {
  res.send("apitest");
});

app.use("/api/user", userRouter);

app
  .listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
