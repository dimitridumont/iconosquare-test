import { Post } from "@/types/post"
import { CreatePostDto } from "@/modules/posts/domain/dto/create-post.dto"

export interface PostsOutputs {
	getUserPosts(userID: number): Promise<Post[]>
	createPost(createPostDto: CreatePostDto): Promise<Post>
}
