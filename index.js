const express = require("express");
const app = express();
const dishData = require("/dish.json");
let port = process.env.PORT || 3000;


app.get("/", (req,res)=>{
    res.send("Hello World");
});

app.post("/dish",(req, res)=>{
    res.send(dishData);
});

app.listen(port, ()=>{
    console.log('Example app is listening on port http://localhost:${port}');
});
