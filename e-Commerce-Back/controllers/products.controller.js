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
const getRange = async (req, res) => {
    const { min, max } = req.body
    const rangeProduct = await productsModel.find({ 'details.price': { $gt: min, $lt: max } })
    return res.send(rangeProduct)
}
const updateActive = async (req, res) => {
    const { id } = req.params
    const { isActive } = req.body
    try {
        const product = await productsModel.findByIdAndUpdate(id, { isActive })
        if (!product) return res.status(404).send()
        res.send(product)
    } catch (err) {
        res.status(400).send(e)
    }
}
const deleteProduct = async (req, res) => {
    const { id } = req.params
    try {
        const product = await productsModel.findByIdAndDelete({ id })
        if (!product) res.status(404).send()
        res.send(product)
    } catch (err) {
        res.status(500).send()
    }
}
module.exports = {
    create: createProduct,
    getAll: getProducts,
    getProduct,
    getActive,
    getRange,
    updateActive,
    deleteProduct
}