const express = require('express')
const connect = require('./connect')
const cors = require('cors')
const vehicleRoutes = require('./vehicleRoutes')

const app = express()

app.use(express.json())
app.use(cors())
app.use("/api", vehicleRoutes)

app.listen(5000, () => {
  connect.connectToServer()
  console.log("Server is running on port 5000")});