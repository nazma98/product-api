const logRequestMiddleware = (req, res, next) => {
    console.log(`${Date()} - ${req.method} - ${req.url}`);
    next();
};

module.exports = {
    logRequestMiddleware,
};