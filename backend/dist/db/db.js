"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable  @typescript-eslint/no-explicit-any */
const mongoose_1 = require("mongoose");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Load environment variables from a .env file into process.env
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mongoURI = "mongodb+srv://admin:test1234@u08cluster.cootwbe.mongodb.net/?retryWrites=true&w=majority&appName=U08Cluster";
        yield (0, mongoose_1.connect)(mongoURI);
        console.log("MongoDB Connected...");
    }
    catch (err) {
        console.error(err.message);
        console.log("Connection failed");
        // Exit process with failure
        process.exit(1);
    }
});
exports.default = connectDB();
