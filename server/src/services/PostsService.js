import { dbContext } from "../db/DbContext"


class PostsService {
    async createPost(postData) {
        const newPost = await dbContext.Posts.create(postData)
        return newPost
    }

    async getPost(){
        const allPost = await dbContext.Posts.find()
        return allPost
    }

    async deletePost(postId){
        const foundPost = await dbContext.Posts.findById(postId)
        await foundPost.remove()
        return `Post Deleted`
    }

    async updatePost(postId, updatePost){
        const foundPost = await dbContext.Posts.findById(postId)
        foundPost.postedBy = updatePost.postedBy ? updatePost.postedBy : foundPost.postedBy
        foundPost.title = updatePost.title ? updatePost.title : foundPost.title
        foundPost.bodyUrl = updatePost.bodyUrl ? updatePost.bodyUrl : foundPost.bodyUrl
        foundPost.description = updatePost.description ? updatePost.description : foundPost.description
        foundPost.like = updatePost.like ? updatePost.like : foundPost.like
        await foundPost.save()
        return foundPost
    }

}

export const postsService = new PostsService()