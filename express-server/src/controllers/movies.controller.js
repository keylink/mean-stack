const Joi = require('joi');
const Movies = require('../models/movies.model');
const ms = require('mediaserver');

const moviesSchema = Joi.object({
    title: Joi.string().required(),
    fullplot: Joi.string(),
    runtime: Joi.number(),
    genres: Joi.array()
});

module.exports = {
    getMovie,
    getMovies,
    updateMovie,
    updateRating,
    searchMovie,
};

async function getMovie(id) {
    const filter = { _id: id };
    return await Movies.findById(filter);
}

async function getMovies(page, limit) {
    return await Movies.paginate({}, { page: page, limit: limit });
}

async function updateMovie(id, data) {
    const filter = { _id: id };
    const movie = await Joi.validate(
        data, moviesSchema, { abortEarly: false }
    );
    return await Movies.updateOne(filter, movie);
}

async function updateRating(id, rating) {
    const filter = { _id: id };
    return await Movies.updateOne(filter, rating);
}

async function searchMovie(title) {
    var regexp = { $regex: '.*' + title + '.*' }
    return await Movies.find({"title": regexp}).limit(20);
}

async function listen(music) {
    ms.pipe("/birds.ogg");
}
