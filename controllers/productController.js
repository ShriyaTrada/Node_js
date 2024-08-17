const { productSchema } = require('../validate');
const { Product } = require('../models');

exports.createProduct = async (req, res) => {
    const { error } = productSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ error: 'Product creation failed' });
    }
};

exports.getProducts = async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
};

exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { error } = productSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        await Product.update(req.body, { where: { id } });
        res.json({ message: 'Product updated' });
    } catch (err) {
        res.status(500).json({ error: 'Product update failed' });
    }
};

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await Product.destroy({ where: { id } });
        res.json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Product deletion failed' });
    }
};
