const express = require("express")
const router = express.Router()
const userController  = require("../Controller/userController")

router.get("/",(req,res)=>  {
    let users = userController.getAll()
    res.send(users)
  })
  router.post("/",(req,res)=>
  {
    let user = {id:parseInt(req.body.id),
      name:req.body.name,
      contactno:req.body.contact}
    let msg = userController.adduser(user)
    res.send(msg)
  })
  router.put("/",(req,res)=>
  {
    let msg = userController.updateUser(req.body)
    res.send(msg)
  })
  router.delete("/",(req,res)=>
  {
    let id = req.body.id;
    let msg = userController.deleteuser(parseInt(id))
    res.send(msg)
  })
  
  router.get("/:id",(req,res)=>
  {
    let i = parseInt(req.params.id);
    let usr = userController.getUserById(i)
    res.send(usr)
  })

  module.exports=router