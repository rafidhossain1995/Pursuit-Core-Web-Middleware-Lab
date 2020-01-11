const express = require("express");
const cors = require("cors");
const port = 3004;

const app = express();
app.get(cors());

const animals = ["cat",
                 "dog",
                 "rabbit",
                 "giraffe",
                 "lion",
                 "penguin",
                "anteater"
]

const isAnimal = (req, res, next) =>{
    console.log("Middleware isAnimal has been fired");
    next();
}
app.use("/animal/:id", isAnimal);

app.get("/animal/:id", (req, res) => {
    if(animals.includes(req.params.id)){
        res.json({status: "success",
                  message: true})
    }else{
        res.json({status: "fail",
                  message: false})
    }

})

app.listen(port,()=>{
    console.log("You are now listening to port " + port)
})