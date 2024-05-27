"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connectDB = async () => {
    try {
        const mongoURI = "mongodb://localhost:27017/MTGVault";
        await (0, mongoose_1.connect)(mongoURI);
        console.log("MongoDB Connected...");
    }
    catch (err) {
        console.error(err.message);
        console.log("Connection failed");
        // Exit process with failure
        process.exit(1);
    }
};
exports.default = connectDB();
