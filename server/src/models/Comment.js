import { Schema } from "mongoose";



export const CommentSchema = new Schema({
    profileName: {type: Schema.Types.ObjectId, ref: 'account', maxLength: 40},
    content: {type: String, maxLength: 200},
    likes: {type: String, }
},{toJSON: {virtuals: true}})

CommentSchema.virtual('profile', {
    localField: 'profileName',
    foreignField: '_id',
    ref: 'Profile'
})