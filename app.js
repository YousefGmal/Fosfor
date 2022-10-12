const express = require('express')
const connectDB = require('./DB/connectDB')
require('dotenv').config()
const router = require('./modules/user/user.router')
const app = express()
app.use(express.json())
app.use(router)
connectDB()
app.get("/",(req,res)=>{
    res.json({message:"welcome to fosfor"})
})
app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
  })
  
