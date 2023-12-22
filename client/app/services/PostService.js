import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { api } from "./AxiosService.js"

class PostService {
  // async getPost() {
  //   try {
  //     const res = await api.get('/')
  //     AppState.post = new Post(res.data)
  //   } catch (err) {
  //     logger.error(err)
  //   }
  // }

  async createPost(formData){
  const res = await api.post('api/posts', formData)
  console.log(res)
  AppState.posts.push(new Post(res.data))
  }

}
export const postService = new PostService()
