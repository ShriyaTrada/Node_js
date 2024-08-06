// routes/userRoutes.js
const express = require('express');
const { User, Group } = require('../models');

const router = express.Router();

// Create a new user
router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all users with groups
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({ include: Group });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a user to a group
router.post('/:userId/groups/:groupId', async (req, res) => {
  try {
    const { userId, groupId } = req.params;
    const user = await User.findByPk(userId);
    const group = await Group.findByPk(groupId);

    if (!user || !group) {
      return res.status(404).json({ error: 'User or Group not found' });
    }

    await user.addGroup(group);
    res.json({ message: 'User added to group' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
