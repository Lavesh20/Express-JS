const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.connect("mongodb+srv://laveshvyas20:HYfPIVV7timUKqPN@cluster0.frfboac.mongodb.net/userappnew");


const User = mongoose.model('Users', { name: String, email:String , password:String});

const user = new User({
     name: 'lavesh',
     email:'lavesh.com',
     password:'1234' 
    });

user.save();