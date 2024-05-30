"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./db/db"));
const app_1 = __importDefault(require("./app"));
db_1.default;
dotenv_1.default.config();
const port = 3000;
app_1.default
    .listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
})
    .on("error", (error) => {
    throw new Error(error.message);
});
