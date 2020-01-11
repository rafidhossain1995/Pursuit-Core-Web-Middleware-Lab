const express = require("express");
const cors = require("cors");
const port = 3004;

const app = express();

const animals = [
    {animal: "cat"},
    {animal:"dog"},
    {animal:"rabbit"},
    {animal:"giraffe"},
    {animal:"lion"},
    {animal:"penguin"},
    {animal:"anteater"}
]


app.get("/animal/:id", (req, res) => {
    animals.forEach(animal =>{
        if(animal.id === req.params.id){
            res.json({status: "success",
                      message: true})
        }else{
            res.json({status: "fail",
                      message: false})
        }

    })

})

app.listen(port,()=>{
    console.log("You are now listening to port " + port)
})