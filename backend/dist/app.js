"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const User_1 = __importDefault(require("./api/User"));
const profileRoutes_1 = __importDefault(require("./routes/profileRoutes"));
const threadRoutes_1 = __importDefault(require("./routes/threadRoutes"));
const db_1 = __importDefault(require("./db/db"));
// Initialize Database Connection
db_1.default;
// Create Express App
const app = (0, express_1.default)();
// Middleware Setup: Parses incoming request with json and urlencoded. Then, Allows cookies to be parsed.
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
// Sets up CORS to allow requests from the frontend domain and allows cookies to be included
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT"],
    credentials: true,
}));
// Basic Route for Testing
app.get("/", (req, res) => {
    res.send("MTG Vault Backend");
});
// Test Route
app.get("/test", (req, res) => {
    res.send("apitest");
});
// User Routes
app.use("/api/user", User_1.default);
// Profile Routes
app.use("/api", profileRoutes_1.default);
app.use('/', threadRoutes_1.default);
// Export App for Server
exports.default = app;
