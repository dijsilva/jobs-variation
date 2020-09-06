import { Document} from "mongoose"

export interface IJJobsSchema extends Document {
    language: String,
    week_date: Date,
    source_site: String,
    state: String,
    jobs: Number,
}
