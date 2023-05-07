const { getCurrentUser, editUserProfile } = require('../controllers/user');
const authentication = require('../middlewares/authentication');
const router = require('express').Router();


router.route('/currentUser').get(authentication, getCurrentUser);
router.route('/editProfile').patch(authentication, editUserProfile);


module.exports = router;