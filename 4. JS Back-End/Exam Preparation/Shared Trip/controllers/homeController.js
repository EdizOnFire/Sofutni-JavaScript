const router = require('express').Router()

const publicationService = require('../services/publicationService');
const userService = require('../services/userService');

router.get('/', async (req, res) => {
    res.render('home');
})

router.get('/profile', async (req, res) => {
    res.render('home/profile');
})

module.exports = router;