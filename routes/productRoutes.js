const express = require('express');
const router = express.Router();
const { createProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');
const rbacMiddleware = require('../middleware/rbacMiddleware');

// Public route
router.get('/', getProducts);

// Protected routes - only accessible by 'admin'
router.post('/', authMiddleware, rbacMiddleware(['admin']), createProduct);
router.put('/:id', authMiddleware, rbacMiddleware(['admin']), updateProduct);
router.delete('/:id', authMiddleware, rbacMiddleware(['admin']), deleteProduct);

module.exports = router;
