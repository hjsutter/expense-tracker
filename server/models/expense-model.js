const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Expense = new Schema(
    {
        name: { type: String, required: true },
        desc: { type: String, required: false },
        category: { type: String, required: true },
        amount: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('expenses', Expense)