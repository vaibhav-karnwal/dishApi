const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
const dishData = require("./dish.json");
const projectData = require("./projectApi.json");
const detailData = require("./detail.json");
app.get("/", (req,res)=>{
    res.send("Hello World");
});

app.get('/dish', (req,res)=> {
    res.send(dishData);
});

app.get('/detail', (req,res)=> {
    res.send(detailData);
});

app.get('/project', (req,res)=> {
    res.send(projectData);
});

app.listen(port, ()=>{
    console.log('Example app is listening on port http://localhost:${port}');
});

