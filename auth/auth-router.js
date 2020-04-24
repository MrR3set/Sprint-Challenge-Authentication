const router = require('express').Router();
const Users = require("../database/dbConfig");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secrets = require("./secrets");

router.post('/register', (req, res) => {
  // implement registration
  const credentials = req.body;
    const rounds = process.env.HASH_ROUNDS || 8;
    const hash = bcrypt.hashSync(credentials.password, rounds);
    credentials.password = hash;

    Users("users").insert(credentials).then(id=>{
        Users("users").select("username").where({"id":id[0]}).first().then(user=>{
          res.status(20).json(user);
        })
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"err"});
    });
});

router.post('/login', (req, res) => {
  // implement login
  const {username,password}=req.body;
  Users("users").select("*").where({username}).then(([user])=>{
      if(user && bcrypt.compareSync(password,user.password)){
          const token = generateToken(user);
          res.status(200).json({msg:"Authorized",token})
      }else{
          res.status(401).json({message: 'Not authorized'});
      }
  }).catch(err=>{
      console.log(err);
      res.status(500).json({msg:err});
  })
});

module.exports = router;


function generateToken(user){
  const payload = {
      subject: user.id,
      username: user.username,
  }

  const options = {
      expiresIn:"30m",
  }

  return jwt.sign(payload, secrets.secret, options);
}