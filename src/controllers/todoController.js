const path = require('path')
const Todo = require('../models/todoModels')

const getTasks = (req,res)=>{
    res.sendFile(path.join(__dirname, '../../public/todo.html'));
}

const addTask = (req,res)=>{
    const text = req.body.text
    const priority = req.body.priority
    const deadline = req.body.deadline
    Todo.create({text,priority,deadline})
    
    res.status(201).json({message:"Task added successfully"})
}

const getAllTasks = (req,res)=>{
    Todo.find()
    .then((tasks)=>{
        res.status(200).json(tasks)
    })
    .catch((err)=>{
        res.status(500).json({message:err.message})
    })
}

module.exports = { getTasks,addTask,getAllTasks }