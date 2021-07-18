const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
const dishData = require("./dish.json");

app.get("/", (req,res)=>{
    res.send("Hello World");
});

app.get('/api/books', (req,res)=> {
    res.send(dishData);
});

app.listen(port, ()=>{
    console.log('Example app is listening on port http://localhost:${port}');
});

