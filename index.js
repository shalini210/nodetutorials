const express = require("express")
const app = express()
app.use(express.urlencoded({extended:true}))
const userController = require("./Controller/userController")
app.get("/users",(req,res)=>  {
  let users = userController.getAll()
  res.send(users)
})
app.post("/users",(req,res)=>
{
  // {id:5,name:'Rishi patel',contactno:"894564524"},
  let user = {id:parseInt(req.body.id),name:req.body.name,contactno:req.body.contact}
  let msg = userController.adduser(user)
  res.send(msg)
})
// /updateuse    id   
app.put("/users",(req,res)=>
{
  let msg = userController.updateUser(req.body)
  res.send(msg)
})

app.get("/users/:id",(req,res)=>
{
  let i = parseInt(req.params.id);
  let usr = userController.getUserById(i)
  res.send(usr)
})

app.get("/userbyname/:name",(req,res)=>
{
  
})
app.listen(8080,()=>console.log("server running on port 8080"))