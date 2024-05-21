"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connectAPI = async () => {
    try {
        const apiURI = "https://api.scryfall.com/cards/55e6c31b-f9e9-4e42-a875-985d99300d9d";
        await (0, mongoose_1.connect)(apiURI);
        console.log("API Connected...");
    }
    catch (err) {
        console.error(err.message);
        console.log("Connection failed");
        // Exit process with failure
        process.exit(1);
    }
};
exports.default = connectAPI();
