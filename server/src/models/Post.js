import { Schema } from "mongoose";


export const PostSchema = new Schema({
    postId: {type: Schema.Types.ObjectId, ref:'post'},
    postedBy: {type: Schema.Types.ObjectId, ref:'account'},
    title: {type: String, maxLength: 40, required: true},
    body: {type:String, required: true, maxLength:200},
    imgUrl: {type: String, maxLength: 300, required: true},
    description: {type: String, maxLength: 30},
    like: {type: Array},
    comment: {type: Schema.Types.ObjectId}
},{toJSON: {virtuals: true}, timestamps: true})

PostSchema.virtual('account', {
    localField: 'postedBy',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
})
