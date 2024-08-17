const express = require('express');
const router = express.Router();
const { addToCart, getCart, removeFromCart } = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware');
const rbacMiddleware = require('../middleware/rbacMiddleware');

// All cart operations are accessible by 'user' and 'admin'
router.post('/', authMiddleware, rbacMiddleware(['user', 'admin']), addToCart);
router.get('/', authMiddleware, rbacMiddleware(['user', 'admin']), getCart);
router.delete('/:id', authMiddleware, rbacMiddleware(['user', 'admin']), removeFromCart);


module.exports = router;
