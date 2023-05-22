const CustomError = require('../errors/custom');


const errorHandler = async (err, req, res) => {

    if(err instanceof(CustomError)) {
        return res.status(err.statuscode).json({ msg : err.message })
    }

    return res.status(505).json({ msg: 'Internal server error' });
}


module.exports = errorHandler;