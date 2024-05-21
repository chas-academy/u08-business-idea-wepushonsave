import dotenv from "dotenv";
import userRouter from "./api/User";
import express from "express";
import connectDB from "./db/db"; //was in app.ts moved here and commented out in app.ts

connectDB; //was in app.ts moved here and commented out in app.ts

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
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
