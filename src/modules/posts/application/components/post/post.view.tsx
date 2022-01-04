import React from "react"
import { Post } from "@/types/post"
import { Modal } from "@/components/modal/modal"
import { CommentsContainer } from "@/modules/comments/application/comments.container"

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
		<>
			<div onClick={openCommentsModal}>
				<h3>{post.title}</h3>

				<div>{post.body}</div>
			</div>

			<Modal show={isCommentsModalVisible} onHide={closeCommentsModal}>
				<>
					<div>
						<h3>{post.title}</h3>

						<div>{post.body}</div>
					</div>

					<CommentsContainer postID={post.id} />
				</>
			</Modal>
		</>
	)
}
