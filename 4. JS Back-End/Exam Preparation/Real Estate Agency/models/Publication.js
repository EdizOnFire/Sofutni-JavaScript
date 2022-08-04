const mongoose = require('mongoose')

const publicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    certificate: {
        type: String,
        enum: ['Apartment', 'Villa', 'House'],
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    homeImage: {
        type: String,
        required: true,
    },
    propertyDescription: {
        type: String,
        required: true,
    },
    availablePieces: {
        type: Number,
        required: true,
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    usersShared: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
})

const Publication = mongoose.model('Publication', publicationSchema)

module.exports = Publication