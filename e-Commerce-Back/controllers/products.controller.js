const productsModel = require('../models/products.model');

const createProduct = (req, res) => {
    const { name, category, isActive, details } = req.body;

    const product = new productsModel({
        name: name,
        category: category,
        isActive: isActive,
        details: details
    });
    product.save((err) => {
        if (err) return res.json({ error: err });
        return res.json({ "success": product });
    })
}

const getProducts = (req, res) => {
    productsModel.find({}).then((products) => {
        return res.send(products)
    })
}
const getProduct = (req, res) => {
    const { q } = req.params
    productsModel.find({ name: { $regex: `${q}` } }).then((products) => {
        return res.send(products)
    })
}
const getActive = (req, res) => {

    productsModel.find({ isActive: true }).then((products) => {
        return res.send(products)
    })
}
const getRange = (req, res) => {
    const { active } = req.params
    productsModel.find({ 'details.price': { $gt: 50, $lt: 100 } }).then((products) => {
        return res.send(products)
    })
}
module.exports = {
    create: createProduct,
    getAll: getProducts,
    getProduct,
    getActive,
    getRange
}