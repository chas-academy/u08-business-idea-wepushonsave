import express, { Express, Request, Response } from "express";
import cors from "cors";
//import connectDB from "./db/db"; ////Why here? COPIED TO server.ts

const app: Express = express();

//connectDB; //Why here? COPIED TO server.ts

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("MTG Vault Backend");
});

export default app;
