const express = require('express')
const connect = require('./connect')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

mongoose


app.get("/api", (req, res) => {
  res.send("Hello World")
});

app.listen(5000, () => {
  connect.connectToServer()
  console.log("Server is running on port 5000")});