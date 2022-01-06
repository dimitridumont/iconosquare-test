import { api } from "@/config/api"
import { Post } from "@/types/post"
import { PostsOutputs } from "@/modules/posts/domain/posts.outputs"
import { CreatePostDto } from "@/modules/posts/domain/dto/create-post.dto"

export class PostsApi implements PostsOutputs {
	getUserPosts(userID: number): Promise<Post[]> {
		return api
			.get(`users/${userID}/posts`)
			.then(({ data }: { data: Post[] }) => data)
	}

	createPost(createPostDto: CreatePostDto): Promise<Post> {
		const body = {
			title: createPostDto.title,
			body: createPostDto.body,
			userId: createPostDto.userID,
		}

		return api.post(`posts`, body).then(({ data }: { data: Post }) => data)
	}
}
