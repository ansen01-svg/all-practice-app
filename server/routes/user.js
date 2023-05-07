const { getCurrentUser, editUserProfile } = require('../controllers/user');
const router = require('express').Router();


router.route('/currentUser').get(getCurrentUser);
router.route('/editProfile').patch(editUserProfile);


module.exports = router;