import { Request, Response } from "express";
import {
  createDeck,
  getDecks,
  getDeck,
  addCardToDeck,
  deleteDeck,
} from "./deckBuilderModel";
/**
 *
 * @param req request deck_name & user_id
 * @param res user input @if name = true & user_id = true
 * @returns
 */
export const createDeckController = (req: Request, res: Response) => {
  const { name } = req.body;
  const userId = req.userId;

  if (!name) return res.status(400).json({ error: "Deck name is required" });
  if (!userId) return res.status(400).json({ error: "Unauthorized" });

  const newDeck = createDeck(name, userId);
  res.status(201).json(newDeck);
};
/**
 *
 * @param _req all decks for user_id
 * @param res all decks @if user_id = true
 * @returns
 */
export const getDecksController = (_req: Request, res: Response) => {
  const userId = _req.userId;

  if (!userId) return res.status(400).json({ error: "Unauthorized" });

  const decks = getDecks(userId);
  res.json(decks);
};
/**
 *
 * @param req
 * @param res
 * @returns
 */
export const getDeckController = (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = req.userId;

  if (!userId) return res.status(400).json({ error: "Unauthorized" });

  const deck = getDeck(id, userId);
  if (!deck) {
    return res.status(400).json({ error: "Deck not found" });
  }
  res.json(deck);
};
/**
 *
 * @param req
 * @param res
 * @returns
 */
export const addCardToDeckController = (req: Request, res: Response) => {
  const { id } = req.params;
  const { card } = req.body;
  const userId = req.userId;

  if (!userId) return res.status(400).json({ error: "Unauthorized" });
  if (!card) return res.status(400).json({ error: "Card is required" });

  const updateDeck = addCardToDeck(id, userId, card);
  if (!updateDeck) {
    return res.status(400).json({ error: "Deck not found or deck is full" });
  }
  res.json(updateDeck);
};
/**
 *
 * @param req
 * @param res
 * @returns
 */
export const deleteDeckController = (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = req.userId;

  if (!userId) return res.status(400).json({ error: "Unauthorized" });

  const success = deleteDeck(id, userId);
  if (!success) {
    return res.status(404).json({ error: "Deck not found" });
  }
  res.status(204).send();
};
