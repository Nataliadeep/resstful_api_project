const {Router, request} = require('express');

const categoryController = require('../../../controllers/categoryController');
const router = Router(); //Llamamos al método Router de Express

router.get("/", categoryController.getAllCategories);
router.get("/:categoryId", categoryController.getCategory);
router.post("/", categoryController.createCategory);
router.put("/:categoryId", categoryController.updateCategory);
router.delete("/:categoryId", categoryController.deleteCategory);

module.exports = router;