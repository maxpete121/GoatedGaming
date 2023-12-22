import { AppState } from "../AppState.js"
import { postService } from "../services/PostService.js"
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js";

function _drawPost(){
    const posts = AppState.posts
    let content = ''
    posts.forEach(post => content += post.PostTemplate)
    setHTML('posts', content)
}

export class PostController{
    constructor(){
        console.log('Scrum Daddy')
        AppState.on('posts', _drawPost)
        this.getPosts()
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
    async getPosts() {
        try {
            await postService.getPosts()
        } catch (error) {
            console.error(error);   
        }
    }
}