import React from "react"
import { Post } from "@/types/post"
import { Modal } from "@/components/modal/modal"
import { CommentsContainer } from "@/modules/comments/application/comments.container"
import styles from "./post.module.scss"

interface Props {
	post: Post
	isCommentsModalVisible: boolean
	openCommentsModal: () => void
	closeCommentsModal: () => void
}

export const PostView = ({
	post,
	isCommentsModalVisible,
	openCommentsModal,
	closeCommentsModal,
}: Props) => {
	return (
		<div className={styles.container}>
			<div onClick={openCommentsModal}>
				<h3 className={styles.title}>{post.title}</h3>

				<div className={styles.body}>{post.body}</div>
			</div>

			<Modal show={isCommentsModalVisible} onHide={closeCommentsModal}>
				<>
					<div>
						<h3 className={styles.title}>{post.title}</h3>

						<div className={styles.body}>{post.body}</div>
					</div>

					<CommentsContainer postID={post.id} />
				</>
			</Modal>
		</div>
	)
}
