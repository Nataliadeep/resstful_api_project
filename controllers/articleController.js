//Enlazamos nuestro servicio
const articleService = require('../services/articleService')

const getAllArticles = async(req,res)=>{
    try{
        const  allArticles = await articleService.getAllArticles();
        res.status(200).send({status:'OK', data: allArticles})
    }catch(error){
        res.status(error.status || 500).send({status: 'FAILED', data: { error: error.message} })
    }
}

const getArticle = async(req,res)=>{
    try{
        let id = req.params.articleId
        const article = await articleService.getArticle(id)
        res.status(200).send({status: 'OK', data:article})
    }catch(error){
        res.status(error.status || 500).send({status: 'FAILED', data: { error: error.message} })
    }
}

const createArticle = async (req,res)=>{
    try{
        const {body} = req
        const createdArticle = await articleService.createArticle(body.title, body.content, body.UserId)
        res.status(201).send({status: 'OK', data:createdArticle})
    }catch(error){
        res.status(error.status || 500).send({status: 'FAILED', data: { error: error.message} })
    }
}

const updateArticle = async (req, res)=>{
    try{
        const id = req.params.articleId
        let {title,content,UserId} = req.body;
        const updatedArticle = await articleService.updateArticle(id, title, content, UserId)
        res.status(200).send({status: 'OK', data:updatedArticle})
    }catch(error){
        res.status(error.status || 500).send({status: 'FAILED', data: { error: error.message} })
    }
}

const deleteArticle = async (req, res)=>{
    try{
        const id = req.params.articleId
        const deletedArticle =  await articleService.deleteArticle(id)
        res.status(200).send({status: 'OK', data:deletedArticle})
    }catch(error){
        res.status(error.status || 500).send({status: 'FAILED', data: { error: error.message} })
    }
}

module.exports = {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle
}
