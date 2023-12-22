import { postsService } from "../services/PostsService";
import BaseController from "../utils/BaseController";


export class PostsController extends BaseController {
    constructor() {
        super('api/posts')
        this.router
        .get('', this.getPost)
        .post('', this.createPost)
        .delete('/:postId', this.deletePost)
    }
    async createPost(request, response, next) {
        try {
            const postData = request.body
            // const userInfo = request.userInfo
            const post = await postsService.createPost(postData)
            response.send(post)
        } catch (error) {
            next(error)
        }
    }

    async getPost(request, response, next){
     try {
        await postsService.createPost()
     } catch (error) {
        next(error)
     }   
    }

    async deletePost(request, response, next){
        try {
            const postId = request.params.postId
            const deletedPost = await postsService.deletePost(postId)
            return deletedPost
        } catch (error) {
            next(error)
        }
    }
}
