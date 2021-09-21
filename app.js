const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/TestDb'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
app.use(express.json())

con.on('open', () => {
    console.log('connected...') 
})



const testrouter = require('./router/test')

app.use('/test',testrouter)

app.listen(9000, () => {
    console.log('Server started')
})
