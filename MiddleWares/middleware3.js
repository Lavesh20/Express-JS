const express = require('express')

const app = express();

function UserAgeMiddleware(req,res,next){
    const age = req.query.age;
     if(age>=14){
       next();
     }
     else{
        res.json({
            msg:" Not Old Enough"
        })
     }
}


app.get('/ride2',UserAgeMiddleware,function(req,res){
  
    res.json({
        msg:"you have successfully ridden ride 2"
       })}
);


app.get('/ride1',UserAgeMiddleware,function(req,res){
  
    res.json({
        msg:"you have successfully ridden ride 1"
       })}
);


app.listen(3000);