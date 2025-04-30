const express = require("express")
const app = express()
const userController = require("./Controller/userController")
app.get("/users",(req,res)=>  {
  let users = userController.getAll()
  res.send(users)
})
app.get("/users/:id",(req,res)=>
{
  let i = parseInt(req.params.id);
  let usr = userController.getUserById(i)
  res.send(usr)
})
app.listen(8080,()=>console.log("server running on port 8080"))