import pool from "../db/pool";
import type { Item } from "../types/item";

export async function getAllItems(): Promise<Item[]> {
  const result = await pool.query("SELECT * FROM menu_items ORDER BY id");
  return result.rows;
}

export async function getItemById(id: number): Promise<Item | null> {
  const result = await pool.query(
    "SELECT * FROM menu_items WHERE id = $1", 
    [id]
  );
  return result.rows[0] || null;
}

export async function createItem(item: Omit<Item, 'id' | 'created_at'>): Promise<Item> {
  const { name, description, price, category, image_url } = item;
  const result = await pool.query(
    `INSERT INTO menu_items (name, description, price, category, image_url) 
     VALUES ($1, $2, $3, $4, $5) 
     RETURNING *`,
    [name, description, price, category, image_url]
  );
  return result.rows[0];
}

export async function updateItem(id: number, updates: Partial<Item>): Promise<Item | null> {
  const fields = Object.keys(updates).map((key, index) => `${key} = $${index + 1}`).join(', ');
  const values = Object.values(updates);
  values.unshift(id);
  
  const result = await pool.query(
    `UPDATE menu_items SET ${fields} WHERE id = $1 RETURNING *`,
    values
  );
  return result.rows[0] || null;
}

export async function deleteItem(id: number): Promise<boolean> {
  const result = await pool.query(
    "DELETE FROM menu_items WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rowCount > 0;
}