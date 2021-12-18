const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    }, 
    date: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['certified', 'founded', 'news', 'services', 'awards', 'events', 'broadcast', 'patents', 'welfare', 'articles', 'funding', 'launch', 'interview']
    },
    url: {
        type: String
    } 
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;