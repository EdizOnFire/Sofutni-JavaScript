const mongoose = require('mongoose')

const publicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    payment: {
        type: String,
        enum: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'],
        required: true,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    author: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    usersShared: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
})

const Publication = mongoose.model('Publication', publicationSchema)

module.exports = Publication