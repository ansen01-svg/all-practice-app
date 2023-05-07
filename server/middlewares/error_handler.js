const CustomError = require('../errors/custom');


const errorHandler = (req, res) => {
    return res.status(505).json({ msg: 'Internal server error' });
}


module.exports = errorHandler;