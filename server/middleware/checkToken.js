const JWT = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config()


const checkToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send({ error: "The authentication token has not been sent." });
    } else {
        JWT.verify(token, process.env.PWD, async (error, user) => {
            if (error) {
                return res.status(400).send({ message: "Invalid token" });
            };
            req.user = user;
            next();
        })
    }
}

module.exports = {checkToken}