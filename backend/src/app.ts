import express, { Express, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./api/User";
import profileRouter from "./routes/profileRoutes"; // Import the profile router from routes folder
import connectDB from "./db/db";
import threadRouter from './routes/threadRoutes';

connectDB;

const app: Express = express();

// Call connectDB to connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("MTG Vault Backend");
});
app.use('/threads', threadRouter);

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


export default app;