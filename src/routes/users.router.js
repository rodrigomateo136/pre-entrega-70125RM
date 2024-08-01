const {Router} =require('express');
const router= Router();

const users=[];

router.get('/', (req , res )=>{
    res.send({data:users});
})

router.post('/', (req , res )=>{
    const {body}=req
    if(!body.email || !body.password){
        return res.status(400).send({status:"error de datos"})
    }
    users.push({id :users.length + 1, ...body})
    res.send({data:users});
})

router.put('/', (req , res )=>{
    res.send(" put hola mundo vamaaa");
})

router.delete('/:uid', (req , res )=>{
    const { uid }=req.params
    const nuevaLista=users.filter(user => user.id !== Number(uid));
    res.send(nuevaLista);
})
module.exports = router