const generatePayload = (user) => {
    return {
        user : user.username,
        id : user._id
    }
}


module.exports = generatePayload;