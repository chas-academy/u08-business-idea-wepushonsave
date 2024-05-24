import express, { Express, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./api/User";
import profileRouter from "./routes/profileRoutes";
import threadRoutes from "./routes/threadRoutes";

import connectDB from "./db/db";
import threadRouter from './routes/threadRoutes';

const app: Express = express();

// Call connectDB to connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("MTG Vault Backend");
});
app.use('/community', threadRouter);

export default app;