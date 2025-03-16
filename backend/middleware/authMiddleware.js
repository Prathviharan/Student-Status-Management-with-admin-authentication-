const jwt = require("jsonwebtoken");
const protect = (req, res, next) => {
    const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({message: "Unauthorized access"});
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = decoded;
        next();
    } catch (error){
        return res.status(401).json({message: "Invalid token"});
    }
};

module.exports = {protect};