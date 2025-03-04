const { Product } = require('../model');

const getProductById = async (id) => {
    return await Product.findOne({ _id: id }, { deleted: false });
}

const getProducts = async ({ page= 0, offset= 10}) => {
    const products = await Product.find({ deleted: false })
    .skip(page * offset)
    .limit(offset)
    .select('_id name price image categories')
    .sort({ createdAt: -1 });
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
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProductByName,
};