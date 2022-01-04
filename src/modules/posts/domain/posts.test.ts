import { Post } from "@/types/post"
import { getUserPosts } from "@/modules/posts/domain/posts.actions"
import { PostsInMemory } from "@/modules/posts/infrastructure/posts.in-memory"
import { postsFakes } from "@/modules/posts/infrastructure/posts.fakes"

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
})
