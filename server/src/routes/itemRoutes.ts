import { Router } from "express";
import * as itemController from "../controllers/itemController";

const router = Router();

// GET /api/items
router.get("/", itemController.getAllItemsController);

// GET /api/items/:id
router.get("/:id", itemController.getItemByIdController);

// POST /api/items
router.post("/", itemController.createItemController);

// PUT /api/items/:id
router.put("/:id", itemController.updateItemController);

// DELETE /api/items/:id
router.delete("/:id", itemController.deleteItemController);

export default router;