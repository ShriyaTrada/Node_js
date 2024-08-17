const { User } = require('../models');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, role } = req.body;
    try {
        await User.update({ username, role }, { where: { id } });
        res.json({ message: 'User updated' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to update user' });
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await User.destroy({ where: { id } });
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
};
