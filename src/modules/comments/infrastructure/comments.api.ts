import { Comment } from "@/types/comment"
import { api } from "@/config/api"
import { CommentsOutput } from "@/modules/comments/domain/comments.output"

export class CommentsApi implements CommentsOutput {
	getPostComments(postID: number): Promise<Comment[]> {
		return api
			.get(`/posts/${postID}/comments`)
			.then(({ data }: { data: Comment[] }) => data)
	}
}
