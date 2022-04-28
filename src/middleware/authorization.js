const res = require("express/lib/response")
const jwt = require("jsonwebtoken")
const authorModule = require("../modules/authorModule")
const blogsModule = require("../modules/blogsModule")

const authentication = (req, res, next) => {
    try {

        let token = req.headers["x-api-key"]
        if (!token) return res.status(400).send({ status: false, msg: "x-api-key is required" })
        const decodedToken = jwt.verify(token, 'Group 27')
        if (!decodedToken) return res.status(403).send({ status: false, msg: "invalid token. please enter a valid token" })
        req["decodedToken"] = decodedToken
        next()
    }
    catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}

const authorization = async (req, res, next) => {
    try {
        let author_Id = req.decodedToken.authorId
        let blogId = req.params.blogId
        let author = await blogsModule.findOne({ authorId: author_Id, _id: blogId })
        if (!author) return res.status(403).send({ status: false, msg: "Unauthorized User" })
        next()
    }
    catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}

module.exports.authentication = authentication
module.exports.authorization = authorization