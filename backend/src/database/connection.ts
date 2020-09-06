import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
dotenv.config()

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-shard-00-00-ipiii.gcp.mongodb.net:27017,cluster0-shard-00-01-ipiii.gcp.mongodb.net:27017,cluster0-shard-00-02-ipiii.gcp.mongodb.net:27017/job-search?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`, 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
});

export { mongoose };