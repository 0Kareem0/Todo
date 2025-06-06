const Todo = require("../models/todoModels")
const path = require('path')
// GET all todos
const showPage = async(req,res) =>{res.sendFile(path.join(__dirname, '../public/todo.html'));
}

// POST create a new todo
const createTask = async (req, res) => {
  const {text , priority, deadline } = req.body;
  const newTodo = new Todo({ text, priority, deadline });
  
  try {
      await newTodo.save();
      res.status(201).json(newTodo);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
}

// add handler to GET tasks from DB
const getTasks = async (req, res) => {
    try {
        const tasks = await Todo.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
  console.log("hello");
  



module.exports = {showPage, getTasks, createTask}