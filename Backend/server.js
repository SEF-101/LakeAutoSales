const express = require('express')
const connect = require('./db/connectDB')
const cors = require('cors')
const vehicleRoutes = require('./routes/vehicleRoutes')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const contactRoutes = require('./routes/contactRoutes')

const app = express()

app.use(express.json())
app.use(cors())
app.use("/api", vehicleRoutes)
app.use("/api", authRoutes)
app.use("/api", userRoutes)
app.use("/api", contactRoutes)

app.listen(5000, () => {
  connect.connectToServer()
  console.log("Server is running on port 5000")});