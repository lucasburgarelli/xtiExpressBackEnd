const jwt = require('jsonwebtoken')
const { fail } = require("../helpers/response");

exports.autorizate = (cpf, privileges) => {
    let userformat = {
        cpf: cpf,
        privileges: privileges
    }

    return jwt.sign(userformat, process.env.JWT_SECRET, {
        expiresIn: '15 min'
    })
}

exports.verify = (req, res, next) => {
    let token = req.headers["authorization"]

    if (!token) return res.status(403).json(fail("Token not provided"))
    
    jwt.verify(token, process.env.JWT_SECRET, (err, obj) => {
        if (err) return res.status(403).json(fail("Not authenticated"))
        
        req.user = obj
        next()
    })
}

exports.verifyAdmin = (req, res, next) => {
    if (req.user.privileges != "A") return res.status(401).json(fail("Not authorized"))

    next()
}