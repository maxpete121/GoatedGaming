import { Schema } from "mongoose";


export const PostSchema = new Schema({
    postedBy: {type: Schema.Types.ObjectId, ref:'account'},
    title: {type: String, maxLength: 60, required: true},
    bodyUrl: {type: String, maxLength: 300, required: true},
    description: {type: String, maxLength: 100},
    like: {type: Number},
},{toJSON: {virtuals: true}})

PostSchema.virtual('account', {
    localField: 'postedBy',
    foreignField: '_id',
    ref: 'Account'
})