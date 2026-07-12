const { Router } = require("express");
const userRouter = Router();

userRouter.post("/singup", (req, res) =>{
    res.json({
        message: "signup enndpoint"
    })
})

userRouter.post("/singin", (req, res) =>{
    res.json({
        message: "signup enndpoint"
    })
})

userRouter.get("/purchases", (req, res) =>{
    res.json({
        message: "signup enndpoint"
    })
})


module.exports = {
    userRouter = userRouter
}
