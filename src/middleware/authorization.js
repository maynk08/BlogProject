const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
    try {
        
        let token=req.headers["x-api-key"]
        if(!token)return res.status(400).send({status:false,msg:"x-api-key is required"})
        const decodedToken = jwt.verify(token, 'Group 27')
        if(!decodedToken)return res.status(403).send({status:false, msg:"invalid token. please enter a valid token"})
        req["decodedToken"]=decodedToken
        next()
    }
    catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}


module.exports = auth