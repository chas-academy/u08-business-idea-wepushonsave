import express, { Express, Request, Response } from "express";
import cors from "cors";

// import cardRouter from "./cards/cards";
const app: Express = express();

// Allows cookies to be sent
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/card", cardRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("MTG Vault Backend");
});

export default app;
