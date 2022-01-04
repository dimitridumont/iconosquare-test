import { Post } from "@/types/post"

export interface PostsOutputs {
	getUserPosts(userID: number): Promise<Post[]>
}
