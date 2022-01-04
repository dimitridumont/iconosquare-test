import { PostsOutputs } from "@/modules/posts/domain/posts.outputs"
import { Post } from "@/types/post"

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
