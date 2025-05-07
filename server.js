const express = require("express");
const app = express();
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 4000;
const todoRoute = require("./src/routes/todoRoute")
const connectDB = require("./src/database/db")

//middleware
app.use(express.json())
app.disable('etag')
app.disable('x-powered-by')
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

console.log("taking day off toady");

//routes
app.use('/',todoRoute)

connectDB()


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
