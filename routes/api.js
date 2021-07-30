const router = require('express').Router();

const apiFilmesRouter = require('./api/filmes');

router.use('/filmes', apiFilmesRouter);

module.exports = router;