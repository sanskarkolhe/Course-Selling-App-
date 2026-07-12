const express = require("express");

const app = express();


app.post("/user/singup", (req, res) =>{
    res.json({
        message: "signup enndpoint"
    })
})

app.post("/user/singin", (req, res) =>{
    res.json({
        message: "signup enndpoint"
    })
})


app.get("/user/purchases", (req, res) =>{
    res.json({
        message: "signup enndpoint"
    })
})

app.post("/course/purchase", (req, res) =>{
    res.json({
        message: "signup enndpoint"
    })
})

app.get("/course", (req, res) =>{
    res.json({
        message: "signup enndpoint"
    })
})


app.listen()