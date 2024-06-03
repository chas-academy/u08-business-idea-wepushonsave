import express from "express";
import {
  addCardToDeckController,
  createDeckController,
  deleteDeckController,
  getDeckController,
  getDecksController,
} from "../controllers/deckBuilderController";

const deckRouter = express.Router();

deckRouter.post("/", createDeckController);
deckRouter.get("/", getDecksController);
deckRouter.get("/:id", getDeckController);
deckRouter.post("/:id/cards", addCardToDeckController);
deckRouter.delete("/:id", deleteDeckController);

export default deckRouter;
