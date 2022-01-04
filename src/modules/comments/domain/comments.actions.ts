import { CommentsOutput } from "@/modules/comments/domain/comments.output"
import { Comment } from "@/types/comment"

export const getPostComments = async ({
	postID,
	commentsOutput,
}: {
	postID: number
	commentsOutput: CommentsOutput
}): Promise<Comment[]> => {
	try {
		return commentsOutput.getPostComments(postID)
	} catch (error: any) {
		throw new Error(error)
	}
}
