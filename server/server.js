require("dotenv").config()
const express = require("express")
const cors = require("cors")
const corsOption = require("./config/corsOptions")
const connectDB = require("./config/dbConn")
const mongoose = require('mongoose')
const PORT = process.env.PORT || 1050
const app = express()
connectDB()

app.use(cors(corsOption))
app.use(express.json())
app.use(express.static("public"))
app.use("/api/tasks", require("./routes/task"))
app.use("/api/articles", require("./routes/article"))
app.get("/", (req, res) => {
    res.send("hello")
})

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
mongoose.connection.on('error', err => {
    console.log(err)
})