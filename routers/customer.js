const express = require('express')
const router = express.Router()
const Customer =require('../models/customer')

router.get('/',async(req,res)=>{
    try{
        const customer = await Customer.find()
        res.json(customer)
    }
   catch(err){
       res.send(err)
   }
})



router.get('/:id',async(req,res)=>{
    try{
        const customer = await Customer.findById(req.params.id)
        res.json(customer)
    }
   catch(err){
       res.send(err)
   }
})



router.patch('/:id',async(req,res)=> {
    try{
        const customer = await Customer.findById(req.params.id)
        customer.name=req.body.name
        const c1= await customer.save()
        res.json(c1)
    }catch(err){
        res.send('Error')
    }

})

router.post('/',async(req,res)=>{
    const customer = new Customer({
        name:req.body.name,
        tech:req.body.tech,
        graduated:req.body.graduated
    })

    try{
        const c1= await customer.save()
        res.json(c1)
    }catch(err){
        res.send(err)
    }

})

module.exports=router