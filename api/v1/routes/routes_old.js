const db = require('../../../models');
const{Router} = require('express');
const router = Router();

router.get("/", (req,res)=>{
    console.log()
    res.send({Title: 'Hello ADSO Mis LaMiNaS!'});
});

router.post('/new', async(req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let password = req.body.password;
    try{
        await db.User.create({
            name,
            email,
            password,
            phone
        });
        res.status(200).send({status:'OK', message:"User created"});
    } catch (error) {
        res.status(400).send('User could not be created');
    } 
})

//Ruta o endpoint para traer todos los usuarios 
router.get('/all', async(req,res)=>{
    try{
        let users = await db.User.findAll();
        res.status(200).send({status:'OK', message:"User listed!", data:users});
    } catch (error) {
        res.status(400).send({status:'FAIL', message: "Users error!", data:null});
    } 
})

//Ruta o endpoint para traer un usuario especifico
router.get('/:id', async(req,res)=>{
    try{
        let id = req.params.id;
        let users = await db.User.findByPk(id);
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send('Could not get user');
    } 
})


//Ruta o endpoint para actualizar un usuario específico
router.put('/:id', async(req,res)=>{
    try{
        let id = req.params.id;
        let {name, email, phone, password} = req.body;
        await db.User.update(
            {name, email,phone,password},
            {
                where:{
                    id,
                }
            }
        );
        res.status(200).send("user updated successfully");
    } catch (error) {
        res.status(400).send('failed to update user');
    } 
})


//Ruta o endpoint para eliminar un usuario específico
router.delete('/:id', async(req,res)=>{
    try{
        let id = req.params.id;
        await db.User.destroy({
                where:{
                    id,
                }
            });
        res.status(200).send("user deleted successfully");
    } catch (error) {
        res.status(400).send('could not delete user');
    } 
});


module.exports = router;