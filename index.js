const express = require('express')
const mongoose = require('mongoose')
const dbUrl ='mongodb://localhost/Userdb'

const app =express()
mongoose.connect(dbUrl,{useNewUrlParser:true})
const con= mongoose.connection

con.on('open', function(){
    console.log("connected with mongodb")
})

app.use(express.json())

const customerRouter=require('./routers/customer')
app.use('/customers',customerRouter)

app.listen(9000,function(){
    console.log('Server started on port 9000')
})