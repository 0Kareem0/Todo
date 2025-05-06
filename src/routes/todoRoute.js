const express = require("express");
const router = express.Router();
const path = require("path");

const { getTasks } = require("../controllers/todoController");
router.get('/', getTasks)

module.exports = router;