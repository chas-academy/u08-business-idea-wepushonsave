"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCard = exports.updateCard = exports.getCard = exports.addCard = exports.getAllCards = void 0;
const singleCardModel_1 = __importDefault(require("../models/singleCardModel"));
const create = async (data) => {
    return await singleCardModel_1.default.create(data);
};
const readAll = async () => {
    const Cards = await singleCardModel_1.default.find({}).limit(5);
    return Cards;
};
const read = async (id) => {
    return await singleCardModel_1.default.findById(id);
};
const update = async (id, data) => {
    return await singleCardModel_1.default.findByIdAndUpdate(id, data, { new: true });
};
const deleteOne = async (id) => {
    return await singleCardModel_1.default.findByIdAndDelete(id);
};
const getAllCards = async (req, res) => {
    const card = await readAll();
    res.status(200).json(card);
};
exports.getAllCards = getAllCards;
const addCard = async (req, res) => {
    const { name } = req.body;
    const result = await create({ name });
    res.status(201).json({ message: "Card created successfully", card: result });
};
exports.addCard = addCard;
const getCard = async (req, res) => {
    const id = req.params.id;
    const card = await read(id);
    res.status(200).json(card);
};
exports.getCard = getCard;
const updateCard = async (req, res) => {
    const { title, author, publisher, read } = req.body;
    const id = req.params.id;
    const updatedcard = await update(id, { title, author, publisher, read });
    res
        .status(200)
        .json({ message: "Update succeeded", updatedcard: updatedcard });
};
exports.updateCard = updateCard;
const deleteCard = async (req, res) => {
    const id = req.params.id;
    const deletedcard = await deleteOne(id);
    res.status(200).json({ message: "card deleted", deletedcard: deletedcard });
};
exports.deleteCard = deleteCard;
