const rbacMiddleware = (allowedRoles) => {
    return (req, res, next) => {
        const userRole = req.user.role;
        console.log(userRole);
        if (!allowedRoles.includes(userRole)) {
            return res.status(403).json({ message: 'Forbidden: Access is denied.' });
        }

        next();
    };
};

module.exports = rbacMiddleware;
