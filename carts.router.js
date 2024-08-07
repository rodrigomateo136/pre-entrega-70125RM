

const { Router} =require('express');
const cartsManagerFs = require('../manager/fileSystem/cartsManager');

const router =Router();

const cartManager =  new cartsManagerFs()

router.get('/', async (req , res )=>{
    try {
        const cartBd =await cartManager.readCart()
        res.send({status :'succes', data:cartBd})
    } catch (error) {
        console.log(error.message)
    }
})

router.post('/', async (req, res ) =>{
    try {
        const { body }= req

        const response = await cartManager.createCart(body)

        res.send({status: 'succes', data:response})

    } catch (error) {
        console.log(error.message)
    }
})
module.exports = router