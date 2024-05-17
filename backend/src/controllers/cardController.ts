// This file is for all the CRUD functions for single cards
import Card from "../models/cardModel";
import { Request, Response } from "express";

const create = async (data: object) => {
  return await Card.create(data);
};

const readAll = async () => {
  const Cards = await Card.find({}).limit(5);
  return Cards;
};

const read = async (id: string) => {
  return await Card.findById(id);
};

const update = async (id: string, data: object) => {
  return await Card.findByIdAndUpdate(id, data, { new: true });
};

const deleteOne = async (id: string) => {
  return await Card.findByIdAndDelete(id);
};

export const getAllCards = async (req: Request, res: Response) => {
  const card = await readAll();
  res.status(200).json(card);
};

export const addCard = async (req: Request, res: Response) => {
  const { name } = req.body;

  const result = await create({ name });

  res.status(201).json({ message: "Card created successfully", card: result });
};

export const getCard = async (req: Request, res: Response) => {
  const id = req.params.id;
  const card = await read(id);

  res.status(200).json(card);
};

export const updateCard = async (req: Request, res: Response) => {
  const { name } = req.body;
  const id = req.params.id;

  const updatedcard = await update(id, { name, read });

  res
    .status(200)
    .json({ message: "Update succeeded", updatedcard: updatedcard });
};

export const deleteCard = async (req: Request, res: Response) => {
  const id = req.params.id;

  const deletedcard = await deleteOne(id);

  res.status(200).json({ message: "card deleted", deletedcard: deletedcard });
};
