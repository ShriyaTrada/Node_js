// routes/groupRoutes.js
const express = require('express');
const { Group, User } = require('../models');

const router = express.Router();

// Create a new group
router.post('/', async (req, res) => {
  try {
    const group = await Group.create(req.body);
    res.json(group);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all groups with users
router.get('/', async (req, res) => {
  try {
    const groups = await Group.findAll({ include: User });
    res.json(groups);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
