const { cartSchema } = require('../validate');
const { Cart } = require('../models');


exports.addToCart = async (req, res) => {
    const { error } = cartSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        const cartItem = await Cart.create(req.body);
        res.status(201).json(cartItem);
    } catch (err) {
        res.status(500).json({ error: 'Failed to add to cart' });
    }
};

exports.getCart = async (req, res) => {
    const cartItems = await Cart.findAll({ where: { userId: req.user.id } });
    res.json(cartItems);
};

exports.removeFromCart = async (req, res) => {
    const { id } = req.params;
    try {
        await Cart.destroy({ where: { id, userId: req.user.id } });
        res.json({ message: 'Item removed from cart' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to remove item from cart' });
    }
};
