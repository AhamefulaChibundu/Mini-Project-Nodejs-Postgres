import express from 'express';
import { v4 as uuid } from 'uuid';
import pool from '../db.js';

const router = express.Router();

// Create user
router.post('/', async (req, res) => {
  const { name, email, age } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required.' });
  }

  try {
    const id = uuid();
    const result = await pool.query(
      'INSERT INTO users (id, name, email, age) VALUES ($1, $2, $3, $4) RETURNING *',
      [id, name, email, age]
    );

    res.status(201).json({ message: 'User created', user: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create user' });
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users' });
  }
});

// Get user by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch user' });
  }
});

// Update user by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  try {
    const result = await pool.query(
      'UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *',
      [name, email, age, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found or not updated' });
    }

    res.status(200).json({ message: 'User updated', user: result.rows[0] });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update user' });
  }
});

// Delete user by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found or not deleted' });
    }

    res.status(200).json({ message: 'User deleted', user: result.rows[0] });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete user' });
  }
});

export default router;
