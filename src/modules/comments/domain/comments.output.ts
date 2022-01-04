import { Comment } from "@/types/comment"

export interface CommentsOutput {
	getPostComments(postID: number): Promise<Comment[]>
}
