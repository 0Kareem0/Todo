const express = require("express");
const router = express.Router();
const path = require("path");

const { getTasks,getAllTasks ,addTask} = require("../controllers/todoController");


router.get('/', getTasks)
router.post('/add',addTask)
router.get('/all',getAllTasks)

module.exports = router;