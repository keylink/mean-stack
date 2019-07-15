const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

const MoviesSchema = new mongoose.Schema({
    title: {
        type: String,
        min: [6, 'Length should be more than 6'],
        max: 12,
        required: [true, 'Title is required'],
        lowercase: true,
    },
    fullplot: {
        type: String,
    },
    runtime: {
        type: Number,
    },
    genres: {
        type: Array,
    },
    imdb: {
        type: Object,
    }
}, {
    versionKey: false
});

MoviesSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Movies', MoviesSchema);
