let usersModel = require("../Model/usersModel")
let users = usersModel.users;
exports.getAll=()=>
{
    return users;
}
exports.getUserById=(id)=>
{
    let u = users.find((usr)=>usr.id==id)
    return u 
}