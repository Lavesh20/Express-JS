//app.use in middlewares

const express = require("express")

const app = express();
app.use(express.json())  //this is body parse middleware

app.get('/',function(req,res){
    res.send("hello")
})


//global catches , a middle ware to display a msg when you have error ,rather than showing all the things
app.use(function(err,req,res,next){
    res.json({
        msg:"sorry something is up with the server"
    })
}) 

app.listen(3001);