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
exports.adduser = (u)=>
{
    users.push(u)
    return "user added"
}
exports.updateUser=(user123)=>
{
    let id = parseInt(user123.id)
    let index = users.findIndex((u)=> u.id==id)
 
    if(index>=0)
    {
        users[index].name = user123.name
        users[index].contactno = user123.contact
        return "record updated"
    }
    return "record not found";
}