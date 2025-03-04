const express = require('express');

const productRouter = express.Router();

const { productController } = require('../controller');
const { validatePayload } = require('../middleware');
const { ProductSchema } = require('../schema');

productRouter.post(
    '/',
    validatePayload(ProductSchema.omit({_id: true })),
    productController.createProduct);
productRouter.get('/', productController.getProducts);
productRouter.get('/:id', productController.getProductById);
productRouter.put(
    '/:id', 
    validatePayload(ProductSchema.partial()),
    productController.updateProduct);
productRouter.delete('/:id', productController.deleteProduct);
productRouter.get('/search', productController.searchProductByName);

module.exports = productRouter;