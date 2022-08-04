const router = require('express').Router()
const publicationService = require('../services/publicationService');

router.get('/', async (req, res) => {

    res.render('home');
})

router.get('/search', async (req, res) => {
    const publications = await publicationService.getAll().lean();

    res.render('home/search', { publications })
})

module.exports = router;