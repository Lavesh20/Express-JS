//To import express library
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000

app.use(bodyParser.text())
app.get('/', (req, res) => {
    console.log(req.body);
  res.send('Hello World!')
})

app.listen(port,()=>{
    console.log(`server running on ${port}`)
})