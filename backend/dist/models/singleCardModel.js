"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/* const cardSchema = new Schema<any>({});
 */
const cardSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
});
const Card = (0, mongoose_1.model)("Card", cardSchema);
exports.default = Card;
