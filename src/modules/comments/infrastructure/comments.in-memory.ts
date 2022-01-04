import { ThrowErrorInMemory } from "@/modules/share/throw-error.in-memory"
import { CommentsOutput } from "@/modules/comments/domain/comments.output"
import { Comment } from "@/types/comment"
import { commentsFakes } from "@/modules/comments/infrastructure/comments.fakes"

export class CommentsInMemory
	extends ThrowErrorInMemory
	implements CommentsOutput
{
	getPostComments(postID: number): Promise<Comment[]> {
		if (this.shouldThrowError) throw new Error()

		return Promise.resolve(commentsFakes)
	}
}
