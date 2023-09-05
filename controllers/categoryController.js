//Enlazamos nuestro servicio
const categoryService = require('../services/categoryService')

const getAllCategories = async(req,res)=>{
    try{
        const  allCategories = await categoryService.getAllCategories();
        res.status(200).send({status:'OK', data: allCategories})
    }catch(error){
        res.status(error.status || 500).send({status: 'FAILED', data: { error: error.message} })
    }
}

const getCategory = async(req,res)=>{
    try{
        let id = req.params. categoryId
        const Category = await categoryService.getCategory(id)
        res.status(200).send({status: 'OK', data:Category})
    }catch(error){
        res.status(error.status || 500).send({status: 'FAILED', data: { error: error.message} })
    }
}

const createCategory = async (req,res)=>{
    try{
        const {body} = req
        const createdCategory = await categoryService.createCategory(body.name)
        res.status(201).send({status: 'OK', data:createdCategory})
    }catch(error){
        res.status(error.status || 500).send({status: 'FAILED', data: { error: error.message} })
    }
}

const updateCategory = async (req, res)=>{
    try{
        const id = req.params.categoryId
        let {name} = req.body;
        const updatedCategory = await categoryService.updateCategory(id, name)
        res.status(200).send({status: 'OK', data:updatedCategory})
    }catch(error){
        res.status(error.status || 500).send({status: 'FAILED', data: { error: error.message} })
    }
}

const deleteCategory = async (req, res)=>{
    try{
        const id = req.params.categoryId
        const deletedCategory =  await categoryService.deleteCategory(id)
        res.status(200).send({status: 'OK', data:deletedCategory})
    }catch(error){
        res.status(error.status || 500).send({status: 'FAILED', data: { error: error.message} })
    }
}

module.exports = {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
}
