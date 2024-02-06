const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RestroSchema = new Schema(
    {
        name: { type: String, required: true }
    }
)

const ProductSchema = new Schema(
    {
        name: { type: String, required: true },
        adjective: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: String, required: true },
        restro: { type: String, required: true },
    }
)

module.exports = mongoose.model('Product', ProductSchema);