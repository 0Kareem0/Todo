const express = require("express");
const path = require("path");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3000
const connectDB = require("./src/dataBase/db")
const todoRoute = require("./src/routes/todoRoute")

//middleware
app.use(express.json());
app.disable('etag')
app.disable('x-powered-by')
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "src/public")))


//routes
app.use('/', todoRoute) 


connectDB()


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.....`);
})
