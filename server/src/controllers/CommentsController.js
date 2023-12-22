import BaseController from "../utils/BaseController.js";



export class CommentsController extends BaseController{
    constructor(){
        super('api/:postId')
        this.router
    }
}