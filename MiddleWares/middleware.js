const express = require("express")

const app = express();

// app.get('/',function(req,res){
//     const username = req.headers.username;
//     const password = req.headers.password;
//     if(!(username == 'admin' || password == '12345')){
//       
//         res.status(401).json({"msg": "Access Denied"});
//         return;
       
//     }
//     res.json({
//         "msg":"you are good to go"
//     }) 
// })



function userMiddleware(req,res,next){
    const username = req.headers.username;
     const password = req.headers.password;
     if(username != "admin" || password != "12345"){
        res.status(401).json({"msg":"something wrong"})
        return;
     }
     next();
}


// middleware to calculateRequests
let  numberOfRequests=0;
function calculateRequests(req,res,next){
    numberOfRequests++;
    console.log( numberOfRequests)
   next();
}

function kidneyMiddleware(req,res,next){
    const kidneyId = req.query.kidneyId;
    if(kidneyId != 1){
        res.json({
            "msg":"something wrong again"
        })
    }
    next();
}



app.get('/',userMiddleware,kidneyMiddleware,calculateRequests,function(req,res){
    //do something 
    res.send("Valid inputs");
})




app.listen(3000);