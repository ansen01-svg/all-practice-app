const User = require('../schemas/user');


let getCurrentUser = async (req, res) => {
    const user = await User.findOne({ _id: req.user.id }).select('_id username bio education');

    res.status(200).json({ user });
}

const editUserProfile = async(req, res) => {
    const { id, bio, education } = req.body;

    let user = await User.findOne({ _id: id });

    if(bio) {
        user.bio = bio;
    }

    if(education) {
        user.education = education;
    }

    await user.save();

    res.status(201).json({ msg: 'Your profile has been updated' })
}


module.exports = { getCurrentUser, editUserProfile };