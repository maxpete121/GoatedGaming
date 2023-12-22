import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { api } from "./AxiosService.js"

class PostService {
  async getPosts() {
    const response = await api.get('api/posts')
    console.log('GOT POSTS', response.data);
    const newPost = response.data.map(pojo => new Post(pojo))
    AppState.posts = newPost
    console.log('plz work', AppState.posts);
  }
  async createPost(formData){
    const res = await api.post('api/posts', formData)
    console.log(res)
    AppState.posts.push(new Post(res.body))
  }

}

export const postService = new PostService()
