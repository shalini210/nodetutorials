const express = require("express")
const app = express()
app.use(express.urlencoded({extended:true}))
const userRouter = require("./Routers/userRouter")

app.get("/",(req,res)=>
{
  res.sendFile(__dirname+"/home.html")
})
app.get("/adduser",(req,res)=>
{
  res.sendFile(__dirname+"/addusers.html")
})
app.use("/users",userRouter )


app.listen(8080,()=>console.log("server running on port 8080"))