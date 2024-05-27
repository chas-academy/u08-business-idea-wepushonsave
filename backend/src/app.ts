import express, { Express, Request, Response } from "express";
import cors from "cors";

// import cardRouter from "./cards/cards";
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/card", cardRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("MTG Vault Backend");
});

export default app;
