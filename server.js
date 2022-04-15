const express = require('express')
const bodyParser = require('body-parser')

const employeRoute  = require('./src/routers/employeRoute')
var Employe = require('./src/models/employeModel')

console.log({employeRoute})

const app = express()

port = process.env.port || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res)=>{
    res.send("Hello signal")
})

app.use("/api/employe", employeRoute)

app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`)
    Employe.createTable()
})

module.exports = app;
