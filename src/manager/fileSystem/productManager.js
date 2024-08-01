const fs =require('fs');

const path ='/dbJason/productsDb.json'
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
        const products = await this.readProducts
    return products
    } catch (error) {
        console.log('error')
    }
    
}
getProduct= ()=> {}

createProduct= async newProduct=> {
    try {
        const products= await this.readProducts()
        if(products.length == 0){
            newProduct.id = 1
        }else {
            newProduct.id = products[products.length - 1].id + 1
        }
        products.push(newProduct)
    await fs.promises.writeFile(path ,JSON.stringify(products , null, '\t'));

    return newProduct

    } catch (error) {
        console.log('error')
    }
}

updatePruduct= ()=> {}
deleteProduct= ()=> {}
}

module.exports= productsManagerFs