import React from "react"
import { Comment } from "@/types/comment"
import styles from "./comments.module.scss"
import { Link } from "@/components/link/link"
import { RequestStatus } from "@/types/request-status"
import {
	DisplayAsyncData,
	DisplayAsyncDataMessages,
} from "@/components/display-async-data/display-async-data"

interface Props {
	comments: Comment[]
	thereIsNoComment: boolean
	getCommentsStatus: RequestStatus
}

export const CommentsView = ({
	comments,
	thereIsNoComment,
	getCommentsStatus,
}: Props) => {
	const getCommentsMessages: DisplayAsyncDataMessages = {
		errorMessage: "An error occurred while retrieving post comments",
		emptyDataMessage: "There is no comment",
	}

	return (
		<DisplayAsyncData
			status={getCommentsStatus}
			thereIsNoData={thereIsNoComment}
			messages={getCommentsMessages}
		>
			<div className={styles.container}>
				<div className={styles.commentsNumber}>
					{comments.length} comments
				</div>

				{comments.map((comment: Comment) => (
					<div key={comment.id} className={styles.comment}>
						<h3 className={styles.name}>{comment.name}</h3>
						<div>{comment.body}</div>
						<div className={styles.email}>
							<Link
								href={"mailto:" + comment.email}
								className={styles.emailLink}
							>
								{comment.email}
							</Link>
						</div>
					</div>
				))}
			</div>
		</DisplayAsyncData>
	)
}
