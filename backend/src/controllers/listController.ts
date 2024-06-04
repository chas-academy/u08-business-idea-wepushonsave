import { Request, Response } from "express";
import List from "../models/listModel";
import mongoose, { Types } from "mongoose";

// Type guard to check if an error is an instance of Error
function isError(error: unknown): error is Error {
  return error instanceof Error;
}

// CRUD LIST
export const createList = async (req: Request, res: Response) => {
  const { userId, title } = req.body;
  try {
    const newList = new List({ userId, title, cardIds: [] });
    await newList.save();

    res.status(201).json(newList);
  } catch (error) {
    if (isError(error)) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

export const getLists = async (req: Request, res: Response) => {
  const { userId } = req.body;
  try {
    const lists = await List.find({ userId: userId });

    res.status(200).json(lists);
  } catch (error) {
    if (isError(error)) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

export const updateList = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const userId = req.userId;

    const list = await List.findOneAndUpdate(
      { _id: id, userId },
      { title },
      { new: true }
    );

    if (!list) {
      return res.status(404).json({ error: "List not found" });
    }

    res.status(200).json(list);
  } catch (error) {
    if (isError(error)) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

export const deleteList = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const deletedList = await List.findOneAndDelete({ _id: id, userId });

    if (!deletedList) {
      return res.status(404).json({ error: "List not found" });
    }

    res.status(200).json({ message: "List deleted successfully" });
  } catch (error) {
    if (isError(error)) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

// ADD CARD TO LIST
export const addCardToList = async (req: Request, res: Response) => {
  try {
    const { listId, cardId } = req.body;

    // Check if the list exists
    const list = await List.findById(listId);
    if (!list) {
      return res.status(404).json({ error: "List not found" });
    }

    // Add the card to the list
    await list.addCard(cardId);

    res.status(200).json({ message: "Card added to list successfully" });
  } catch (error) {
    if (isError(error)) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

// GET A SPECIFIC LIST
const toObjectId = (id: string) => new mongoose.Types.ObjectId(id);
export const getListById = async (req: Request, res: Response) => {
  try {
    const { listId } = req.params;
    const objectIdListId = toObjectId(listId);
    const list = await List.findOne({ _id: objectIdListId });

    if (!list) {
      return res.status(404).json({ error: "List not found" });
    }

    res.status(200).json(list);
  } catch (error) {
    if (isError(error)) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};
