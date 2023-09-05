const db = require('../models')

const getAllArticles = async()=>{
    try{
        let articles = await db.Article.findAll({
            //Con esta opción permitimos mostrar los artículos con la información del usuario
            include:{
                model:db.User,
                required: true,
                as: "User",
                attributes: ["id", "name", "email"]
            },
            attributes: {
                exclude: ['createAt', 'updateAt']
            },
            include: ["categories"]
        })
        return articles;
    }catch(error){
        throw {status: 500, message:  error.message || "Failed to get Articles"}
    }
}

const getArticle = async(id)=>{
    try{
        let article = await db.Article.findByPk(id)
        return article
    }catch(error){
        throw {status: 500, message:  error.message || "Failed to get Article"}
    }
}

const createArticle = async (title, content, UserId)=>{
    try{
        let newArticle = await db.Article.create(
            {title,content,UserId}
        );
        if (newArticle){
            const categories = [1,3,4];
            await newArticle.setCategories(categories);
        }
        return newArticle
    }catch(error){
        throw {status: 500, message:  error.message || "Article could not be created"}
    }
}

const updateArticle = async (id, title, content, UserId)=>{
    try{
        let updatedArticle = await db.Article.update(
            {title,content,UserId},{
                where:{
                    id,
                }
            });
        return updatedArticle
    }catch(error){
        throw {status: 500, message:  error.message || "Article could not be updated"}
    }
}
const deleteArticle = async (id) =>{
    try{
        const deletedArticle = await db.Article.destroy({
                where:{
                    id,
                }
            });
        return deletedArticle
    }catch(error){
        throw {status: 500, message:  error.message || "Article could not be deleted"}
    }
}
module.exports = {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle
}