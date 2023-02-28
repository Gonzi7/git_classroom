const express = require('express')
const app = express()
require('dotenv').config()
console.log(process.env.port)

const puerto = process.env.port || 3000
app.listen(puerto,()=> {
  console.log(`Server on port ${puerto}`)
})
app.get("/",(request,response)=> {
  response.send("Hello world")
})




// Function Greeting 
const greeting = (name) => {
    return `Hello ${name}`
  }
const saludo = greeting('Joelle')
console.log(saludo)