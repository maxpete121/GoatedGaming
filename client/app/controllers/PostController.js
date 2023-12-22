import { postService } from "../services/PostService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"



export class PostController{
    constructor(){
        console.log('Scrum Daddy')
    }

    async createPost(){
        //@ts-ignore */
        event.preventDefault()
        console.log('a')
        //@ts-ignore */
        const formData = getFormData(event.target)
        console.log(formData)
        try{
            await postService.createPost(formData)
        }
        catch(error){
            console.error(error)
            Pop.error(error)
        }
    }
}