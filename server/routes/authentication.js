const {
    register,
    login,
    logout
} = require('../controllers/authentication');
const router = require('express').Router();


router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').delete(logout);


module.exports = router;