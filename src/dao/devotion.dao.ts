import { Devotion } from '../models/devotion.model';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
  host: process.env.MY_SQL_DB_HOST || '127.0.0.1',
  port: Number(process.env.MY_SQL_DB_PORT) || 8889,
  user: process.env.MY_SQL_DB_USER || 'root',
  password: process.env.MY_SQL_DB_PASSWORD || 'root',
  database: process.env.MY_SQL_DB_DATABASE || 'devotionverse_db',
  waitForConnections: true,
  connectionLimit: Number(process.env.MY_SQL_DB_CONNECTION_LIMIT) || 10,
});

export const getAllDevotions = async (): Promise<Devotion[]> => {
  const [rows] = await pool.query('SELECT * FROM devotions');
  return rows as Devotion[];
};

export const getDevotionById = async (id: number): Promise<Devotion | null> => {
  const [rows] = await pool.query('SELECT * FROM devotions WHERE id = ?', [id]);
  const results = rows as Devotion[];
  return results.length ? results[0] : null;
};

export const createDevotion = async (devotion: Devotion): Promise<void> => {
  await pool.query(
    'INSERT INTO devotions (title, content, date_created, category) VALUES (?, ?, ?, ?)',
    [devotion.title, devotion.content, devotion.date_created, devotion.category]
  );
};

export const updateDevotion = async (id: number, devotion: Devotion): Promise<void> => {
  await pool.query(
    'UPDATE devotions SET title = ?, content = ?, date_created = ?, category = ? WHERE id = ?',
    [devotion.title, devotion.content, devotion.date_created, devotion.category, id]
  );
};

export const deleteDevotion = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM devotions WHERE id = ?', [id]);
};