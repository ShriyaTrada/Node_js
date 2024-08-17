const express = require('express');
const router = express.Router();
const { getUsers, updateUser, deleteUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const rbacMiddleware = require('../middleware/rbacMiddleware'); // RBAC middleware

// Only admins can manage users
router.get('/:id', authMiddleware, rbacMiddleware(['admin']), getUsers);
router.put('/:id', authMiddleware, rbacMiddleware(['admin']), updateUser);
router.delete('/:id', authMiddleware, rbacMiddleware(['admin']), deleteUser);

module.exports = router;
