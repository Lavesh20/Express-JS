const express = require('express')
const zod = require('zod')
const jwt = require('jsonwebtoken')
const  jwtPasssword = "123456"
const app = express();
app.use(express.json());

const ALL_USERS = [
    {
      username: "harkirat@gmail.com",
      password: "123",
      name: "harkirat singh",
    },
    {
      username: "raman@gmail.com",
      password: "123321",
      name: "Raman singh",
    },
    {
      username: "priya@gmail.com",
      password: "123321",
      name: "Priya kumari",
    },
  ];
  
  function userExists(username,password){
    let userExist = false
    for(let i  = 0; i<ALL_USERS.length;i++){
        if(username == ALL_USERS[i].username && password == ALL_USERS[i].password){
            userExist = true
           
        }
    }
    return userExist
  }

  app.post('/sign-in',function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username,password)){
       return res.json({
            Msg:"user not found"
        })
    }
    var token  = jwt.sign({username: username},jwtPasssword)
  return res.json({
    token
  })
  })

  app.get('/users',function(req,res){
    const token = req.headers.authorization;
    const decoded = jwt.verify(token,jwtPasssword);
    const username = decoded.username;
    res.json({
        users:ALL_USERS
    })
  })
  

  app.listen(3000);