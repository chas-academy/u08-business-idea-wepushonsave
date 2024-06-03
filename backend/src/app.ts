import express, { Express, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// routes
import deckBuilderRouter from "./deckBuilder/deckBuilderRoutes";
import profileRouter from "./routes/profileRoutes";
import threadRoutes from "./routes/threadRoutes";
import connectDB from "./db/db";
import listRoutes from "./routes/listRoutes";
import userRouter from "./api/User";
import { authMiddleware } from "./middleware/auth";

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
    origin: "https://mtg-tomb.netlify.app",
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

// Pages Routes
app.use("/api", profileRouter);
app.use("/threads", threadRoutes);
app.use("/api", listRoutes);

// Deck Builder Routes
app.use("/auth", authMiddleware);
app.use("/decks", deckBuilderRouter);

/*app.post('/logout', (req: Request, res: Response) => {
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
