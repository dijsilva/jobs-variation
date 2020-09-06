// import { model, Schema } from "mongoose"
import { mongoose } from '../database/connection'
import { IJJobsSchema } from '../interfaces/jobs'


const JobsSchema = new mongoose.Schema({
    language: String,
    week_date: Date,
    source_site: String,
    state: String,
    jobs: Number,
}, {
    timestamps: true
})

export default mongoose.model<IJJobsSchema>("JobsSchema", JobsSchema)
