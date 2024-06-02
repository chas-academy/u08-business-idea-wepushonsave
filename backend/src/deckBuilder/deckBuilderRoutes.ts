import express from "express";
import { authMiddleware } from "../middleware/auth";
import {
  createDeckController,
  getDeckController,
  getDecksController,
  addCardToDeckController,
  deleteDeckController,
} from "./deckBuilderController";

const deckBuilderRouter = express.Router();

deckBuilderRouter.post("/", authMiddleware, createDeckController);
deckBuilderRouter.get("/", authMiddleware, getDecksController);
deckBuilderRouter.get("/:id", authMiddleware, getDeckController);
deckBuilderRouter.post("/:id/cards", authMiddleware, addCardToDeckController);
deckBuilderRouter.delete("/:id", authMiddleware, deleteDeckController);

export default deckBuilderRouter;
