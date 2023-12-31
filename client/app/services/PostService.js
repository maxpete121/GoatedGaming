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
  AppState.posts.push(new Post(res.data))
  }
  async openPost(postId){
    const foundPost = AppState.posts.find(post => post.id == postId)
    console.log('found a post?', foundPost);
    // @ts-ignore
    AppState.activePost = foundPost
    console.log('app state active',AppState.activePost)
    // AppState.activeBird = foundBird
  }

}

export const postService = new PostService()
