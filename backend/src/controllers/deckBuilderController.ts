import { Request, Response } from "express";
import Deck from "../models/deckModel";
import Card from "../models/cardModel";

export const createDeckController = async (req: Request, res: Response) => {
  const { name, userId } = req.body;

  if (!name) return res.status(400).json({ error: "Deck name is required" });
  if (!userId) return res.status(400).json({ error: "Unauthorized" });

  try {
    const newDeck = new Deck({ name, userId, cards: [] });
    await newDeck.save();
    res.status(201).json(newDeck);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getDecksController = async (req: Request, res: Response) => {
  const userId = req.userId;

  try {
    const decks = await Deck.find({ userId });
    res.status(200).json(decks);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getDeckController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deck = await Deck.findById(id).populate("cards");
    if (!deck) return res.status(404).json({ error: "Deck not found" });
    res.status(200).json(deck);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const addCardToDeckController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { card } = req.body;
  const userId = req.userId;

  if (!userId) return res.status(400).json({ error: "Unauthorized" });
  if (!card || !card.id || !card.name)
    return res.status(400).json({ error: "Requires card id and name" });

  try {
    const deck = await Deck.findOne({ _id: id, userId });
    if (!deck) return res.status(404).json({ error: "Deck not found" });

    let existingCard = await Card.findOne({ id: card.id });
    if (!existingCard) {
      existingCard = new Card(card);
      await existingCard.save();
    }

    deck.cards.push(existingCard._id);
    await deck.save();
    res.json(deck);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const deleteDeckController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = req.userId;

  try {
    const deck = await Deck.findOneAndDelete({ _id: id, userId });
    if (!deck) return res.status(404).json({ error: "Deck not found" });
    res.status(200).json({ message: "Deck deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
