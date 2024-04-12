require("dotenv").config();
const jwt = require("jsonwebtoken");

const jwt_auth = (req, res, next) => {
    // Your middleware logic here
    const authHeader = req.headers['authorization']
    const token = authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    console.log('Middleware executed');
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.body.username = decoded.username;
        next();
    } catch (error) {
        res.json({
            mss:"verification failed"
        });
    }
    
     // Call next to proceed to the next middleware or route handler
};

module.exports = jwt_auth;
