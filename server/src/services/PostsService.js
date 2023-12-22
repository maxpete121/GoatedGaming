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

}

export const postsService = new PostsService()