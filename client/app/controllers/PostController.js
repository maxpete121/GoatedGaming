import { postService } from "../services/PostService.js"
import { getFormData } from "../utils/FormHandler.js"

export class PostController{
    constructor(){
        console.log('Scrum Daddy')
    }

    async createPost(){
        try{
            //@ts-ignore */
            event.preventDefault()
            //@ts-ignore */
            await postService.createPost(getFormData(event.target))
        }
        catch(error){
            console.error(error)
        }
    }
    async getPost() {
        try {
            await postService.getPosts()
        } catch (error) {
            console.error(error);   
        }
    }
}