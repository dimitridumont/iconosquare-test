import React from "react"
import { Comment } from "@/types/comment"

interface Props {
	comments: Comment[]
}

export const CommentsView = ({ comments }: Props) => {
	return (
		<div>
			<div>{comments.length} comments</div>

			{comments.map((comment: Comment) => (
				<div key={comment.id}>
					<h3>{comment.name}</h3>
					<div>{comment.body}</div>
					<div>{comment.email}</div>
				</div>
			))}
		</div>
	)
}
