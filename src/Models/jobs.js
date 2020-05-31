const mongoose = require('mongoose')


// create a new model for create a new users and store at database
const JobsSchema = new mongoose.Schema({
    language: String,
    week_date: Date,
    source_site: String,
    state: String,
    jobs: Number,
}, {
    timestamps: true
})


//export this model. The syntax is: mongoose.model(nameOfModel, nameOfDeclaredObject)
module.exports = mongoose.model('JobsSchema', JobsSchema)