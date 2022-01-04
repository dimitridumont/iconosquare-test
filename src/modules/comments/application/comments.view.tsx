import React from "react"
import { Comment } from "@/types/comment"
import styles from "./comments.module.scss"
import { Link } from "@/components/link/link"

interface Props {
	comments: Comment[]
}

export const CommentsView = ({ comments }: Props) => {
	return (
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
	)
}
