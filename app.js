const express = require("express");
const cors = require("cors");
const port = 3004;

const app = express();

let animals = []

app.get("/animal", (req, res) =>{

})

app.listen(port,()=>{
    console.log("You are now listening to port " + port)
})