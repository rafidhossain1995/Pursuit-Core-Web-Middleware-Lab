const express = require("express");
const cors = require("cors");
const port = 3004;

const app = express();
app.use(cors());

const animals = ["cat", "dog", "rabbit", "giraffe", "lion", "penguin", "anteater"];

const isAnimal = (req, res, next) =>{
    console.log("The Middleware isAnimal is running");
    if(animals.includes(req.params.id)){
        next();
    }else{
        res.json({status: "fail",
                  message: false})
    }

    
}
app.get("/animal/:id", isAnimal,(req, res)=>{
res.json({status: "success",
message: true});
});

const randNumber = (req, res, next) =>{
    let output = []
    let randomNumber = Math.floor(Math.random()*output.length-1)
    res.json(
        output[randomNumber]
    )
}
const generateSpread = (req, res, next) =>{
    let floor = req.params.floor
    let ceiling = req.params.ceiling
    for(let i = floor; i <= ceiling; i++){
        res.json({
            result:randNumber
        })    
    }
    next()
}
app.get("/random/:floor:/ceiling",generateSpread,randNumber)

    




app.listen(port,()=>{
    console.log("You are now listening to port " + port)
})