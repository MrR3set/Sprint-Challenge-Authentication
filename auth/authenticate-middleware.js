/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require("jsonwebtoken");
const secrets = require("./secrets");

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    jwt.verify(token,secrets.secret,(err,decoded)=>{
        if(err){
            console.log(err);
            return res.status(401).json ({err:"Not authorized"})
        }
        next();
    })
};
