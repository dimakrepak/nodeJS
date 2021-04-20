const mongoose = require('mongoose');
const productsSchema = mongoose.Schema({
    name: {
        type: String,
        required: false,
        unique: false,
    },
    category: {
        type: String,
        required: false,
        unique: false,
    },
    isActive: {
        type: Boolean,
        required: true,
        unique: false,
    },
    details: {
        description: {
            type: String,
            required: true,
            unique: false,
        },
        price: {
            type: Number,
            required: true,
            unique: false,
        },
        images: {
            type: [Buffer],
            required: true,
            unique: false,
            validate(value) {
                if (value.length !== 2) {
                    throw new Error('2 imgs')
                }
            }
        },
        phonenumber: {
            type: Number,
            required: true,
            unique: false,
            maxlength: 10
        },
        date: {
            type: Date,
            default: Date.now()
        }
    }
})

const productModel = mongoose.model('products', productsSchema);
module.exports = productModel;