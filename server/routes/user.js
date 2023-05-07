const { getCurrentUser, editUserProfile } = require('../controllers/user');
const authentication = require('../middlewares/authentication');
const router = require('express').Router();


router.route('/editProfile').patch(authentication, editUserProfile);
router.route('/currentUser').get(authentication, getCurrentUser);


module.exports = router;