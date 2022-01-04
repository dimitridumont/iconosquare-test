import { Comment } from "@/types/comment"
import { getPostComments } from "@/modules/comments/domain/comments.actions"
import { CommentsInMemory } from "@/modules/comments/infrastructure/comments.in-memory"
import { commentsFakes } from "@/modules/comments/infrastructure/comments.fakes"

describe("[comments] unit tests", () => {
	const commentsOutput = new CommentsInMemory()

	afterEach(() => {
		commentsOutput.setShouldThrowError(false)
	})

	describe("When the user wants to get post comments", () => {
		const postID = 1

		it("should get the post comments", async () => {
			const actualComments: Comment[] = await getPostComments({
				postID,
				commentsOutput,
			})

			expect(actualComments).toEqual(commentsFakes)
		})

		it("should throw error if there is an error", async () => {
			commentsOutput.setShouldThrowError(true)

			await expect(
				getPostComments({
					postID,
					commentsOutput,
				})
			).rejects.toThrow()
		})
	})
})
