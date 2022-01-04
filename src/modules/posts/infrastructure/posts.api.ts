import { api } from "@/config/api"
import { Post } from "@/types/post"
import { PostsOutputs } from "@/modules/posts/domain/posts.outputs"

export class PostsApi implements PostsOutputs {
	getUserPosts(userID: number): Promise<Post[]> {
		return api
			.get(`users/${userID}/posts`)
			.then(({ data }: { data: Post[] }) => data)
	}
}
