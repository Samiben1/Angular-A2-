const expressJwt = require('express-jwt');
const userService = require('../service/user.service');

module.exports = jwt;

const dotenv = require('dotenv');
dotenv.config();
var secret = process.env.SECRET

function jwt() {
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate',
            '/users/register'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};