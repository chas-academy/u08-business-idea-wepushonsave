import { Request, Response } from "express";
import List from "../models/listModel";

// Type guard to check if an error is an instance of Error
function isError(error: unknown): error is Error {
  return error instanceof Error;
}

export const createList = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const userId = req.userId; // Access userId directly from req

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
  try {
    const userId = req.userId; // Access userId directly from req

    // Assuming your List model has a method to find lists by userId
    const lists = await List.find({ userId });

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
    const { id } = req.params; // Assuming id is passed in the request params
    const { title } = req.body;
    const userId = req.userId; // Access userId directly from req

    // Find the list by id and userId
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
    const { id } = req.params; // Assuming id is passed in the request params
    const userId = req.userId; // Access userId directly from req

    // Find the list by id and userId, and delete it
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

export const addCardToList = async (req: Request, res: Response) => {
  try {
    const { listId, cardId } = req.body; // Assuming listId and cardId are passed in the request body

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
