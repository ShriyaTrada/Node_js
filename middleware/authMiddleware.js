// const jwt = require('jsonwebtoken');
// const { User } = require('../models');

// module.exports = async (req, res, next) => {
//     const token = req.headers.authorization?.split(' ')[1];
//     if (!token) return res.status(401).json({ error: 'No token provided' });

//     try {
//         const decoded = jwt.verify(token, 'your_jwt_secret');
//         req.user = await User.findByPk(decoded.id);
//         if (!req.user) return res.status(401).json({ error: 'Invalid token' });
//         next();
//     } catch (err) {
//         res.status(401).json({ error: 'Unauthorized' });
//     }
// };
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ error: 'No token, authorization denied' });
    }

    try {
        console.log('Token:', token);  // Log the token

        const decoded = jwt.verify(token, 'your_jwt_secret');
        console.log('Decoded:', decoded);  // Log the decoded token payload

        req.user = decoded;
        next();
    } catch (err) {
        console.log(err);
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Token expired' });
        }
        return res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = authMiddleware;


