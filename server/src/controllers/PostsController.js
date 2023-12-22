import { postsService } from "../services/PostsService";
import BaseController from "../utils/BaseController";


export class PostsController extends BaseController {
    constructor() {
        super('api/posts')
        this.router
            .post('', this.createPost)
    }
    createPost(request, response, next) {
        try {
            const postData = request.body
            const userInfo = request.userInfo
            const post = await postsService.createPost(postData)

        } catch (error) {
            next(error)
        }
    }
}
