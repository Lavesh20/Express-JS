const express = require('express');
const zod = require('zod')

const app = express();
app.use(express.json());
const schema = zod.array(zod.number());

const schema2 = zod.object({
    email: zod.string(),
    password : zod.string(),
    country : zod.literal("IN").or(zod.literal("US")),
    kidneys : zod.array(zod.number)
})

app.post('/health-checkup',function(req,res){
  
    let kidneys = req.body.kidneys;
   const response =  schema.safeParse(kidneys);
   res.send({
    response
   })
    let kidneyLength = kidneys.length;
    res.send(`kidneys you have is ${kidneyLength}`);

})

app.listen(3000);