import { Router } from "express";
import { getCard, getAllCards } from "../controllers/cardController";

const cardRouter = Router();

cardRouter.get("/", getAllCards);
cardRouter.get("/:id", getCard);
export default cardRouter;
