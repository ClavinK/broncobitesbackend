const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    // Check for the token in the request header
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided, authorization denied' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Add user from payload
        req.user = decoded.id;

        next();
    } catch (error) {
        console.error('Something wrong with auth middleware', error);
        res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = authMiddleware;

