//database connection with http server 

const express = require("express")
const mongoose = require("mongoose");
const app = express();
app.use(express.json())

mongoose.connect("mongodb+srv://laveshvyas20@cluster0.frfboac.mongodb.net/ReUser")


const User = mongoose.model('Users',{name:String,email:String,password:String})
app.post('/sign-up',function(req,res){
 
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;


    const user = new User({
        username: username,
        password: password,
        name:name
    })
    res.send({
        msg:"all done"
    })
    user.save();
})
app.listen(3000);
