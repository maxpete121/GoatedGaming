import { postService } from "../services/PostService.js"
import { getFormData } from "../utils/FormHandler.js"



export class PostController{
    constructor(){
        console.log('Scrum Daddy')
    }

    async createPost(){
        //@ts-ignore */
        event.preventDefault()
        try{
            console.log('a')
            //@ts-ignore */
            await postService.createPost(getFormData(event.target))
        }
        catch(error){
            console.error(error)
        }
    }
}