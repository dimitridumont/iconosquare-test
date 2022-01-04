import React, { useEffect, useState } from "react"
import { Comment } from "@/types/comment"
import { getPostComments } from "@/modules/comments/domain/comments.actions"
import { outputs } from "@/config/outputs"
import { CommentsView } from "@/modules/comments/application/comments.view"
import { RequestStatus } from "@/types/request-status"

interface Props {
	postID: number
}

export const CommentsContainer = ({ postID }: Props) => {
	const [comments, setComments] = useState<Comment[]>([])
	const [getCommentsStatus, setGetCommentsStatus] = useState<RequestStatus>(
		RequestStatus.IDLE
	)

	useEffect(() => {
		_getPostComments()
	}, [])

	const _getPostComments = async () => {
		try {
			setGetCommentsStatus(RequestStatus.LOADING)

			const comments: Comment[] = await getPostComments({
				postID,
				commentsOutput: outputs.commentsOutput,
			})

			setComments(comments)
			setGetCommentsStatus(RequestStatus.COMPLETED)
		} catch (error: any) {
			setGetCommentsStatus(RequestStatus.FAILED)
		}
	}

	const thereIsNoComment: boolean =
		getCommentsStatus === RequestStatus.COMPLETED && comments.length === 0

	return (
		<CommentsView
			comments={comments}
			thereIsNoComment={thereIsNoComment}
			getCommentsStatus={getCommentsStatus}
		/>
	)
}
