const express = require('express');

const productRouter = express.Router();

const { productServices } = require('../service');
const { productController } = require('../controller');

productRouter.post('/', productController.createProduct);
productRouter.get('/', productController.getAllProducts);
productRouter.get('/:id', productController.getProductById);
productRouter.put('/:id', productController.updateProduct);
productRouter.delete('/:id', productController.deleteProduct);

productRouter.post('')
module.exports = productRouter;