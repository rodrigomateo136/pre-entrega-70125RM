const fs =require('fs');

const path ='./cartsDb.json'

class cartsManagerFs{
    constructor (){
        this.path =  path
    }

readCart = async ()=> {
    if(fs.existsSync(path)){
        const cartsJson= await fs.promises.readFile(path , 'utf-8')
        const cartJs =JSON.parse(cartsJson)
        return cartJs
    }
    return [];
}

createCart = async newCarts =>{

    try {
        const carts= await this.readCart()
        if(carts.length == 0){
            newCarts.id = 1
        }else {
            newCarts.id = carts[carts.length - 1].id + 1
        }
        carts.push(newCarts)
    await fs.promises.writeFile(path ,JSON.stringify(carts , null, '\t'));

    return newCarts

    } catch (error) {
        console.log('cacth createcarts' + " "+ error.message)
    }
}
}

getCartById = async ()=>{
    const cartId= await this.readCart()
    console.log(cartId.id)
    return cartId.id
}



createProductToCart = ()=> {}

module.exports= cartsManagerFs