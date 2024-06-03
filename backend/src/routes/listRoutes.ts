import { Router } from "express";
import {
  createList,
  getLists,
  updateList,
  deleteList,
  addCardToList,
  getListById,
} from "../controllers/listController";
import { authMiddleware } from "../middleware/auth";

const router = Router();

router.post("/lists", authMiddleware, createList);
router.get("/lists", authMiddleware, getLists);
router.get("/lists/:listId", getListById);
router.put("/lists/:id", authMiddleware, updateList);
router.delete("/lists/:id", authMiddleware, deleteList);

router.post("/lists/add-card", addCardToList);

export default router;
