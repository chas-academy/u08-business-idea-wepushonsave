import express from "express";
import { authMiddleware } from "../middleware/auth";
import {
  addCardToDeckController,
  createDeckController,
  deleteDeckController,
  getDeckController,
  getDecksController,
} from "../controllers/deckBuilderController";

const deckRouter = express.Router();

deckRouter.post("/", authMiddleware, createDeckController);
deckRouter.get("/", authMiddleware, getDecksController);
deckRouter.get("/:id", authMiddleware, getDeckController);
deckRouter.post("/:id/cards", authMiddleware, addCardToDeckController);
deckRouter.delete("/:id", authMiddleware, deleteDeckController);

export default deckRouter;
