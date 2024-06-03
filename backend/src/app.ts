import express, { Express, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./api/User";
import profileRouter from "./routes/profileRoutes";
import threadRoutes from "./routes/threadRoutes";

import connectDB from "./db/db";

// Initialize Database Connection
connectDB;

// Create Express App
const app: Express = express();

// Middleware Setup: Parses incoming request with json and urlencoded. Then, Allows cookies to be parsed.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Sets up CORS to allow requests from the frontend domain and allows cookies to be included
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  })
);

// Basic Route for Testing
app.get("/", (req: Request, res: Response) => {
  res.send("MTG Vault Backend");
});

// Test Route
app.get("/test", (req, res) => {
  res.send("apitest");
});

// User Routes
app.use("/api/user", userRouter);

// Profile Routes
app.use("/api", profileRouter);
app.use('/threads', threadRoutes);


// Logout Route here??
/*
app.post('/logout', (req: Request, res: Response) => {
  req.session.destroy(err => {
    if(err) {
      return res.redirect('/profile');
    }

    res.clearCookie('token');
    return res.redirect('/login');
  });
});*/

// Export App for Server
export default app;