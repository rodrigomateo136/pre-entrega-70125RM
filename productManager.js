
const fs =require('fs');

const path ='./productsDb.json'
class productsManagerFs {
constructor(){
this.path=path
}

readProducts= async()=> {
    if(fs.existsSync(path)){
        const productsJson= await fs.promises.readFile(path , 'utf-8')
        const productsJs =JSON.parse(productsJson)
        return productsJs
    }
    return [];
}
getProducts= async ()=> {
    try {
        const products = await this.readProducts()
    return products
    } catch (error) {
        console.log(error.message)
    }
    
}
getProduct= ()=> {}

createProduct= async newProduct=> {
    try {
        const products= await this.readProducts()
        if(products.length == 0){
            newProduct.pid = 1
        }else {
            newProduct.pid = products[products.length - 1].pid + 1
        }
        products.push(newProduct)
    await fs.promises.writeFile(path ,JSON.stringify(products , null, '\t'));

    return newProduct

    } catch (error) {
        console.log(error.message)
    }
}

updateProduct= async()=> {
const productUpdate = await this.createProduct()
console.log (productUpdate )
}
deleteProduct= ()=> {}
//lo arme como pude
/*
deleteProduct=('/:pid', (req , res )=>{
    const { pid }=req.params
    const nuevaLista=newProduct.filter(products => products.pid !== Number(pid));
    res.send(nuevaLista);
})
*/
}

module.exports= productsManagerFs