import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { PostSchema } from '../models/Post';
import { CommentSchema } from '../models/Comment.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Posts = mongoose.model('Post', PostSchema)

  Comment = mongoose.model('Comment', CommentSchema)

  // Likes = mongoose.model('Like', )
}

export const dbContext = new DbContext()
