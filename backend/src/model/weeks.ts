import { mongoose } from "../database/connection"

const weeksSchema = new mongoose.Schema({
    week: Date,
    languages: [
        {type: mongoose.Schema.Types.ObjectId, ref: "JobsSchema"}
        ]
    }, {
        timestamps: true,
})

interface IweeksSchema extends mongoose.Document{
    week: Date,
    languages: String[]
}

export default mongoose.model<IweeksSchema>('weeksSchema', weeksSchema)