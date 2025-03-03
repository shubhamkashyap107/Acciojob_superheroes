const authMiddleware = (req, res, next) => {

    const isAuthenticated = true

    if(isAuthenticated)
    {
        next()
    }
    else
    {
        res.status(401).send("Please login first")
    }

} 


module.exports = {
    authMiddleware
}