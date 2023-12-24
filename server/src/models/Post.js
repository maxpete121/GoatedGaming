import { Schema } from "mongoose";


export const PostSchema = new Schema({
<<<<<<< HEAD
    // postId: {type: Schema.Types.ObjectId, ref:'post'},
=======
    postId: {type: Schema.Types.ObjectId, ref:'post'},
>>>>>>> cc1e6b2bf486efcc8084c46e3dacf623d2127a9e
    postedBy: {type: Schema.Types.ObjectId, ref:'Account'},
    title: {type: String, maxLength: 40, required: true},
    body: {type:String, required: true, maxLength:200},
    imgUrl: {type: String, maxLength: 300, required: true},
    description: {type: String, maxLength: 30},
    // like: {type: Array},
    comment: {type: Schema.Types.ObjectId, ref: 'Comment'}
},{toJSON: {virtuals: true}, timestamps: true})

PostSchema.virtual('Account', {
    localField: 'postedBy',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
})
PostSchema.virtual('')
