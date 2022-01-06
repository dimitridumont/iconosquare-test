import { Post } from "@/types/post"
import { createPost, getUserPosts } from "@/modules/posts/domain/posts.actions"
import { PostsInMemory } from "@/modules/posts/infrastructure/posts.in-memory"
import {
	createdPostFake,
	postsFakes,
} from "@/modules/posts/infrastructure/posts.fakes"
import { CreatePostDto } from "@/modules/posts/domain/dto/create-post.dto"

describe("[posts] unit tests", () => {
	const postsOutput = new PostsInMemory()

	afterEach(() => {
		postsOutput.setShouldThrowError(false)
	})

	describe("When the user wants to get user posts", () => {
		const userID = 1

		it("should get the user posts", async () => {
			const actualPosts: Post[] = await getUserPosts({
				userID,
				postsOutput,
			})

			expect(actualPosts).toEqual(postsFakes)
		})

		it("should throw error if there is an error", async () => {
			postsOutput.setShouldThrowError(true)

			await expect(
				getUserPosts({
					userID,
					postsOutput,
				})
			).rejects.toThrow()
		})
	})

	describe("When the user wants to create post", () => {
		const createPostDto: CreatePostDto = {
			title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
			body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
			userID: 1,
		}

		it("should create the post and return it", async () => {
			const actualPost: Post = await createPost({
				createPostDto,
				postsOutput,
			})

			expect(actualPost).toEqual(createdPostFake)
		})

		it("should throw error if there is an error", async () => {
			postsOutput.setShouldThrowError(true)

			await expect(
				createPost({
					createPostDto,
					postsOutput,
				})
			).rejects.toThrow()
		})
	})
})
