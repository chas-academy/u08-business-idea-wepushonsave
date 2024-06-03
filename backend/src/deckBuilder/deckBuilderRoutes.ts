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

deckBuilderRouter.post("/", /* authMiddleware */ createDeckController);
deckBuilderRouter.get("/", getDecksController);
deckBuilderRouter.get("/:id", getDeckController);
deckBuilderRouter.post(
  "/:id/add-card",
  /* authMiddleware */
  addCardToDeckController
);
deckBuilderRouter.delete("/:id", /* authMiddleware */ deleteDeckController);

export default deckBuilderRouter;
