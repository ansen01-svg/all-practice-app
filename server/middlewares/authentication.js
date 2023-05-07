let verifyToken = require('../utils/verify_token');
let { Unauthenticated } = require('../errors'); 

let authentication = (req, res, next) => {
    let { token } = req.signedCookies;

    if (!token) {
        throw new Unauthenticated(`Unauthenticated user`);
    }

    try {
        let verifiedToken = verifyToken(token);
        req.user = verifiedToken;
        return next();
    } catch (error) {
        throw new Unauthenticated(`Unauthenticated user`);
    }
};


module.exports = authentication;