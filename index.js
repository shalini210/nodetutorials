const express = require("express")
const app = express()
app.use(express.urlencoded({extended:true}))
const userRouter = require("./Routers/userRouter")

app.get("/",(req,res)=>
{
  res.send("use /users for user \n user /cars for cars")
})
app.use("/users",userRouter )


app.listen(8080,()=>console.log("server running on port 8080"))