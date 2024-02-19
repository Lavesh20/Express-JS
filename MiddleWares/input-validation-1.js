const express = require('express');

const app = express();
app.use(express.json());

app.post('/health-checkup',function(req,res){
  
    let kidneys = req.body.kidneys;
    if(!kidneys){
        res.json({
            msg: "wrong inputs"
        })
    }
    else{
    let kidneyLength = kidneys.length;
    res.send(`kidneys you have is ${kidneyLength}`);
}
})

app.listen(3000);