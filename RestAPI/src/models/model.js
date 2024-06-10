import mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const Schema1 = new Schema(
    {
        name : {
            type: String,
            required: 'Enter a name'
        },
        amount : {
            type: Number,
            required: 'Enter amount'
        },
        comment : {
            type: String,
        },
        created_date : {
            type: Date,
            default: Date.now
        },
    })