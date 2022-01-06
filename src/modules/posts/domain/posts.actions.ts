import { PostsOutputs } from "@/modules/posts/domain/posts.outputs"
import { Post } from "@/types/post"
import { CreatePostDto } from "@/modules/posts/domain/dto/create-post.dto"

export const getUserPosts = async ({
	userID,
	postsOutput,
}: {
	userID: number
	postsOutput: PostsOutputs
}): Promise<Post[]> => {
	try {
		return await postsOutput.getUserPosts(userID)
	} catch (error: any) {
		throw new Error(error)
	}
}

export const createPost = async ({
	createPostDto,
	postsOutput,
}: {
	createPostDto: CreatePostDto
	postsOutput: PostsOutputs
}): Promise<Post> => {
	try {
		return await postsOutput.createPost(createPostDto)
	} catch (error: any) {
		throw new Error(error)
	}
}
