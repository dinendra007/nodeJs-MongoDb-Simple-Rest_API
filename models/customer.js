const mongoose = require('mongoose')

const customerSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    tech:{
        type:String,
        required:true
    },
    graduated:{
        type:Boolean,
        required:true,
        default:false
    }
})

module.exports=mongoose.model('Customer',customerSchema)

