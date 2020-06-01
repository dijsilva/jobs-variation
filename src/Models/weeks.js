const mongoose = require('mongoose');

const weeksSchema = new mongoose.Schema({
    week: Date,
    languages: [
        {type: mongoose.Schema.Types.ObjectId, ref: "JobsSchema"}
        ]
    }, {
        timestamps: true,
    })


module.exports = mongoose.model('weeksSchema', weeksSchema)