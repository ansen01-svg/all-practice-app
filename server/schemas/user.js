const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide username'],
        min: [3, 'username cannot be less than 4 characters'],
        max: [60, 'username cannot be less than 60 characters'],
        unique: [true, 'username is already taken']
    },
    password: {
        type: String,
        required: [true, 'please provide password'],
        unique: [true, 'please provide a different password'],
    },
    bio: {
        type: String,
        min: [3, 'provide atleast 10 characters'],
    },
    education: {
        type: String,
        enum: ['Class 10', 'Class 12', 'Graduate', 'Post graduate'],
    },
},
{ timestamps: true },
);

userSchema.pre('save', async function() {
    if (!this.isModified('password')) return; 

    let salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function(incomingPassword) {
    let isMatch = await bcrypt.compare(incomingPassword, this.password);
    return isMatch;
};


module.exports = mongoose.model('User', userSchema);