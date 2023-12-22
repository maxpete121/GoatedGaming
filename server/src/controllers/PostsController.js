import { postsService } from "../services/PostsService";
import BaseController from "../utils/BaseController";


export class PostsController extends BaseController {
    constructor() {
        super('api/posts')
        this.router
        .get('', this.getPost)
        .get('/find/:postId')
        .post('', this.createPost)
        .put('/:postId', this.updatePost)
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
        const posts = await postsService.getPost()
        response.send(posts)
     } catch (error) {
        next(error)
     }   
    }

    async deletePost(request, response, next){
        try {
            const postId = request.params.postId
            const deletedPost = await postsService.deletePost(postId)
            response.send(deletedPost)
        } catch (error) {
            next(error)
        }
    }

    async updatePost(request, response, next){
        try {
            const postId = request.params.postId
            const updatePost = request.body
            const updated = await postsService.updatePost(postId, updatePost)
            response.send(updated)
        } catch (error) {
            next(error)
        }
    }


    async getPostId(request, response, next){
        try {
            const postId = request.params.postId
            const post = await postsService.getPostId(postId)
            response.send(post)
        } catch (error) {
            next(error)
        }
    }
}
