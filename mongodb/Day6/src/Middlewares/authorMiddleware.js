const authorMiddleware = (req, res, next) => {
    isAuthor = true

    if(isAuthor)
    {
        next()
    }
    else
    {
        res.send("You are not the author of the book")
    }
}



module.exports = {
    authorMiddleware
}