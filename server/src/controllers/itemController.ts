import { Request, Response } from "express";
import type { Item } from "../types/item";
import type { ApiResponse } from "../types/api";
import * as itemService from "../services/itemService";

export async function getAllItemsController(req: Request, res: Response): Promise<void> {
  try {
    const items = await itemService.getAllItems();
    res.json({ success: true, data: items } satisfies ApiResponse<Item[]>);
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch items" } satisfies ApiResponse);
  }
}

export async function getItemByIdController(
  req: Request<{ id: string }>, 
  res: Response
): Promise<void> {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ success: false, error: "Invalid ID" } satisfies ApiResponse);
      return;
    }
    
    const item = await itemService.getItemById(id);
    if (!item) {
      res.status(404).json({ success: false, error: "Item not found" } satisfies ApiResponse);
      return;
    }
    
    res.json({ success: true, data: item } satisfies ApiResponse<Item>);
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch item" } satisfies ApiResponse);
  }
}

export async function createItemController(req: Request, res: Response): Promise<void> {
  try {
    const { name, description, price, category, image_url } = req.body;
    
    if (!name || !price || !category) {
      res.status(400).json({ 
        success: false, 
        error: "Missing required fields: name, price, category" 
      } satisfies ApiResponse);
      return;
    }
    
    const newItem = await itemService.createItem({
      name,
      description: description || "",
      price: parseFloat(price as any),
      category,
      image_url: image_url || ""
    });
    
    res.status(201).json({ success: true, data: newItem } satisfies ApiResponse<Item>);
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to create item" } satisfies ApiResponse);
  }
}

export async function updateItemController(
  req: Request<{ id: string }>, 
  res: Response
): Promise<void> {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ success: false, error: "Invalid ID" } satisfies ApiResponse);
      return;
    }
    
    const updates = req.body;
    if (Object.keys(updates).length === 0) {
      res.status(400).json({ success: false, error: "No updates provided" } satisfies ApiResponse);
      return;
    }
    
    const updatedItem = await itemService.updateItem(id, updates);
    if (!updatedItem) {
      res.status(404).json({ success: false, error: "Item not found" } satisfies ApiResponse);
      return;
    }
    
    res.json({ success: true, data: updatedItem } satisfies ApiResponse<Item>);
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to update item" } satisfies ApiResponse);
  }
}

export async function deleteItemController(
  req: Request<{ id: string }>, 
  res: Response
): Promise<void>
{
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ success: false, error: "Invalid ID" } satisfies ApiResponse);
      return;
    }
    
    const deleted = await itemService.deleteItem(id);
    if (!deleted) {
      res.status(404).json({ success: false, error: "Item not found" } satisfies ApiResponse);
      return;
    }
    
    res.json({ success: true, data: { message: "Item deleted successfully" } } satisfies ApiResponse);
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to delete item" } satisfies ApiResponse);
  }
}