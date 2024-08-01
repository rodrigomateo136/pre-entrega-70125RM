const { Router} =require('express');
const productsManagerFs = require('../manager/fileSystem/productManager');

const router =Router();

const { getProducts} =  new productsManagerFs()

router.get('/', async (req , res )=>{
    try {
        const productsBd =await getProducts()
        res.send({status :'succes', data:productsBd})
    } catch (error) {
        console.log('error')
    }
})

router.post('/', async (req, res ) =>{
    try {
        const { body }= req

        const response = await productsManagerFs.createProduct(body)

        res.send({status: 'succes', data:response})

    } catch (error) {
        console.log('error')
    }
})
module.exports = router