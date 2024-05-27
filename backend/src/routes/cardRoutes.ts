import { Router } from "express";
import {
  getAllCards,
  addCard,
  getCard,
  updateCard,
  deleteCard,
} from "../controllers/cardController";

const cardRouter = Router();

cardRouter.get("/", getAllCards);
cardRouter.post("/", addCard);
cardRouter.get("/:id", getCard);
cardRouter.put("/:id", updateCard);
cardRouter.delete("/:id", deleteCard);

export default cardRouter;
