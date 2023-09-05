//Creamos el router para poder usar los verbos HTTP
const {Router, request} = require('express');

//Incluimos nuestro controlador de usuario
const articleController = require('../../../controllers/articleController');
const router = Router(); //Llamamos al método Router de Express

//req => request => En request llegan los datos del body
//res => response => Se envían los datos hacia el cliente

router.get("/", articleController.getAllArticles);

router.get("/:articleId", articleController.getArticle);

router.post("/", articleController.createArticle);

router.put("/:articleId", articleController.updateArticle);

router.delete("/:articleId", articleController.deleteArticle);

module.exports = router;