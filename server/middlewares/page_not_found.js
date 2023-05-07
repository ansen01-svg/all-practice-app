const pageNotFoundError = (req, res) => {
    return res.status(404).json({ msg: 'page not found' })
}


module.exports = pageNotFoundError;