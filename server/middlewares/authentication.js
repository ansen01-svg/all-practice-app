let verifyToken = require('../utils/verify_token');
let { Unauthenticated } = require('../errors'); 

let authentication = (req, res, next) => {
    let { userToken } = req.signedCookies;

    if(!userToken) {
        throw new Unauthenticated(`Unauthenticated user`);
    }

    try {
        let verifiedToken = verifyToken(userToken);
        req.user = verifiedToken;
        return next();
    } catch(error) {
        throw new Unauthenticated(`Unauthenticated user`);
    }
};


module.exports = authentication;