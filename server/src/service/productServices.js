const { Product } = require('../model');

const getProductById = async (id) => {
    return await Product.findOne({ _id: id }, { deleted: false });
}

const getAllProducts = async () => {
    const products = await Product.find({ deleted: false }).select('_id name price image categories');
    return products;
};

const createProduct = async (productPayload) => {
    const newProduct = new Product(productPayload);
    await newProduct.save();
    return newProduct;
}

const updateProduct = async (id, payload) => {
    return await Product.findOneAndUpdate({ _id: id }, payload);
}

const deleteProduct = async (id) => {
    return await Product.findOneAndUpdate(
        { _id: id },
        { deleted: true, deletedAt: new Date() }
    );
}

const searchProductByName = async (name) => {
    console.log('Search query name:', name); 
    return await Product.find({ name: name}).select('_id name price image categories');
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProductByName,
};