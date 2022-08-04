const router = require('express').Router()

const publicationService = require('../services/publicationService');
const userService = require('../services/userService');

router.get('/', async (req, res) => {
    const publicationsResult = await publicationService.getAll().lean();

    const publications = publicationsResult.map(x => ({ ...x, shareCount: x.usersShared.length }));

    res.render('home', { publications });
})

router.get('/profile', async (req, res) => {

    const publications = await publicationService.getAll().lean();

    res.render('home/profile', { publications });
})

module.exports = router;