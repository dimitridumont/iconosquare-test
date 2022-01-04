import React, { useEffect, useState } from "react"
import { Comment } from "@/types/comment"
import { getPostComments } from "@/modules/comments/domain/comments.actions"
import { outputs } from "@/config/outputs"
import { CommentsView } from "@/modules/comments/application/comments.view"

interface Props {
	postID: number
}

export const CommentsContainer = ({ postID }: Props) => {
	const [comments, setComments] = useState<Comment[]>([])

	useEffect(() => {
		_getPostComments()
	}, [])

	const _getPostComments = async () => {
		try {
			const comments: Comment[] = await getPostComments({
				postID,
				commentsOutput: outputs.commentsOutput,
			})

			setComments(comments)
		} catch (error: any) {
			console.warn(error)
		}
	}

	return <CommentsView comments={comments} />
}
