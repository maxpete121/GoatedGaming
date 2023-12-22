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

  async createPost(data){
  const res = await api.post('api/posts', data)
  console.log(res)
  AppState.posts.push(new Post(res.body))
  }

}
export const postService = new PostService()
