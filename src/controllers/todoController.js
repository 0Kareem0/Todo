const path = require('path')

const getTasks = (req,res)=>{
    res.sendFile(path.join(__dirname, '../../public/todo.html'));
}


module.exports = { getTasks }