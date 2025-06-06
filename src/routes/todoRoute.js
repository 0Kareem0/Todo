const express = require("express");
const router = express.Router();
const { showPage, getTasks, createTask } = require("../controllers/todoController");

router.get("/", showPage);
router.get("/tasks", getTasks);
router.post("/add", createTask);

module.exports = router