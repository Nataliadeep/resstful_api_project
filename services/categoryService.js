const db = require('../models')

const getAllCategories = async()=>{
    /*try{
        let categories = await db.Article.findAll({
            //Con esta opción permitimos mostrar los artículos con la información del usuario
            include:{
                model:db.Article,
                required: true,
                as: "Article",
                attributes: ["title", "content", "UserId"]
            }
        })
        return categories;
    }catch(error){
        throw {status: 500, message:  error.message || "Failed to get Categories"}
    }*/

    try{
        let categories = await db.Category.findAll()
        return categories
    }catch(error){
        throw {status: 500, message:  error.message || "Failed to get Category"}
    }
}

const getCategory = async(id)=>{
    try{
        let Category = await db.Category.findByPk(id)
        return Category
    }catch(error){
        throw {status: 500, message:  error.message || "Failed to get Category"}
    }
}

const createCategory = async (name)=>{
    try{
        const newCategory = await db.Category.create(
            {name}
        )
        return newCategory
    }catch(error){
        throw {status: 500, message:  error.message || "Category could not be created"}
    }
}

const updateCategory = async (id, name)=>{
    try{
        let updatedCategory = await db.Category.update(
            {name},{
                where:{
                    id,
                }
            });
        return updatedCategory
    }catch(error){
        throw {status: 500, message:  error.message || "Category could not be updated"}
    }
}
const deleteCategory = async (id) =>{
    try{
        const deletedCategory = await db.Category.destroy({
                where:{
                    id,
                }
            });
        return deletedCategory
    }catch(error){
        throw {status: 500, message:  error.message || "Category could not be deleted"}
    }
}
module.exports = {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
}