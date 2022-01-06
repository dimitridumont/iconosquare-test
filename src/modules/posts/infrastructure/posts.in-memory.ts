import { PostsOutputs } from "@/modules/posts/domain/posts.outputs"
import { Post } from "@/types/post"
import {
	createdPostFake,
	postsFakes,
} from "@/modules/posts/infrastructure/posts.fakes"
import { ThrowErrorInMemory } from "@/modules/share/throw-error.in-memory"
import { CreatePostDto } from "@/modules/posts/domain/dto/create-post.dto"

export class PostsInMemory extends ThrowErrorInMemory implements PostsOutputs {
	getUserPosts(userID: number): Promise<Post[]> {
		if (this.shouldThrowError) throw new Error()

		return Promise.resolve(postsFakes)
	}

	createPost(createPostDto: CreatePostDto): Promise<Post> {
		if (this.shouldThrowError) throw new Error()

		return Promise.resolve(createdPostFake)
	}
}
