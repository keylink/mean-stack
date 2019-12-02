const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const moviesCtrl = require('../controllers/movies.controller');

const router = express.Router();
module.exports = router;

//router.use(passport.authenticate('jwt', { session: false }))

router.route('/')
    .get(asyncHandler(getMovies));
router.route('/search')
    .get(asyncHandler(searchMovie));
router.route('/:id')
    .get(asyncHandler(getMovie));
router.route('/:id')
    .put(asyncHandler(updateMovie));
router.route('/rating/:id')
    .put(asyncHandler(updateRating));
router.route('listen')
    .get(asyncHandler(listen))


async function getMovie(req, res) {
    const id = req.params.id;

    let movie = await moviesCtrl.getMovie(id);
    res.json(movie);
}

async function getMovies(req, res) {
    let page = 1;
    let limit = 10;
    if (req.query.page) page = req.query.page;
    if (req.query.limit) limit = req.query.limit;

    let movies = await moviesCtrl.getMovies(page, limit);
    res.json(movies);
}

async function updateMovie(req, res) {
    const id = req.params.id;
    console.log(req.body)
    let updatedMovie = await moviesCtrl.updateMovie(id, req.body);
    res.json(updatedMovie);
}

async function updateRating(req, res) {
    const id = req.params.id;
    let movies = await moviesCtrl.updateRating(id, req.body);
    res.json(movies);
}

async function searchMovie(req, res) {
    console.log('SEARCH', req.query.movie)
    const movie = req.query.movie;
    let movies = await moviesCtrl.searchMovie(movie);
    res.json(movies);
}


async function listen(req, res) {
    let listen = await moviesCtrl.listen(req, res, music);
}
