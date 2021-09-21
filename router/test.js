const express = require('express')
const router = express.Router()
const test1 = require('../Model/test1')


router.get('/', async(req,res) => {
    try{
           const data = await test1.find()
           res.json(data)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {
    const data = new test1({
        name: req.body.name,
        tech: req.body.tech        
    })

    try{
        const a1 =  await data.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

 
module.exports = router