const { Router } = require("express");
const courseRouter = Router();

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
module.exports = {
    courseRouter =  courseRouter

}