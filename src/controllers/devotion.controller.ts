import { Request, Response } from 'express';
import * as dao from '../dao/devotion.dao';
import { Devotion } from '../models/devotion.model';

export const getAll = async (_: Request, res: Response) => {
  try {
    const devotions = await dao.getAllDevotions();
    res.json(devotions);
  } catch (err) {
    res.status(500).send("Error getting devotions");
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const devotion = await dao.getDevotionById(Number(req.params.id));
    devotion ? res.json(devotion) : res.status(404).send('Not found');
  } catch (err) {
    res.status(500).send("Error getting devotion");
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const devotion: Devotion = req.body;
    await dao.createDevotion(devotion);
    res.status(201).send('Devotion created successfully!');
  } catch (err) {
    res.status(500).send('Error creating devotion');
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const devotion: Devotion = req.body;
    await dao.updateDevotion(Number(req.params.id), devotion);
    res.send('Devotion updated successfully!');
  } catch (err) {
    res.status(500).send('Error updating devotion');
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    await dao.deleteDevotion(Number(req.params.id));
    res.send('Devotion deleted successfully!');
  } catch (err) {
    res.status(500).send('Error deleting devotion');
  }
};