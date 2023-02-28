const express = require('express')
const app = express()

app.listen(3000,()=> {
  console.log("server lisen on port 3000")
})








// Function Greeting 
const greeting = (name) => {
    return `Hello ${name}`
  }
const saludo = greeting('Joelle')
console.log(saludo)