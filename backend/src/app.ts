import express, { Express, Request, Response } from "express";
import cors from "cors";
import connectDB from "./db/db";

const app: Express = express();

connectDB;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("MTG Vault Backend");
});

export default app;
