import mongoose from 'mongoose'

mongoose.connect(`mongodb+srv://${process.env.MONGOOSE_USER}:${process.env.MONGOOSE_PASSWORD}@cluster0.1rihg.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`)