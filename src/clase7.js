const express = require('express');
const userRouter= require('./routes/users.router.js');
const productRouter= require('./routes/products.router.js');
const { uploader } = require('./utils/multer.js');

const app=express();
const PORT=8080;

//middlepoints//

app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.use('/static',express.static(__dirname +'/public'))


//endspoint//
app.post('/', uploader.single('myFile'),(req ,res)=>{
    res.send('archivo subido')
})
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
//app.use('/api/cars', carRouter)

app.use((error ,req ,res , next)=>{
    console.log(error.stack)
    res.status(500).send('error de servidor')
})


app.listen(PORT, ()=>{
    console.log("escuchando", PORT)
})