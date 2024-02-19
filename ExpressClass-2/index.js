//creating an http server
const express = require("express")

const app  = express();

//create a function sum

function sum(n){
    let ans  = 0;
    for(let i  = 0;i<n;i++){
        ans = ans +  i;
        
    }
    return ans;
}

app.get('/',(req,res)=>{
   
    const n = req.query.n;
    const ans  = sum(n);
    res.send(`the ans is ${ans.toString()}`);
})

app.listen(3000);