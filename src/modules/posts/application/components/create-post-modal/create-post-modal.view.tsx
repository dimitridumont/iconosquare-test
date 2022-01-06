import React from "react"
import { Modal } from "@/components/modal/modal"
import styles from "./create-post-modal.module.scss"
import { Button } from "@/components/button/button"
import { RequestStatus } from "@/types/request-status"
import { ErrorMessage } from "@/components/error-message/error-message"

interface Props {
	isVisible: boolean
	openModal: () => void
	closeModal: () => void
	form: {
		register: any
		createPost: any
	}
	createPostStatus: RequestStatus
}

export const CreatePostModalView = ({
	isVisible,
	openModal,
	closeModal,
	form,
	createPostStatus,
}: Props) => {
	const { register, createPost } = form

	return (
		<div className={styles.container}>
			<Button onClick={openModal}>Create new post</Button>

			<Modal
				show={isVisible}
				onHide={closeModal}
				title={"Create new post"}
			>
				<form onSubmit={createPost}>
					<div className={styles.row}>
						<label className={styles.label}>Title</label>
						<input
							className={styles.input}
							name={"title"}
							type={"text"}
							required={true}
							{...register("title")}
						/>
					</div>

					<div className={styles.row}>
						<label className={styles.label}>Content</label>
						<textarea
							className={styles.textarea}
							name={"body"}
							rows={5}
							required={true}
							{...register("body")}
						/>
					</div>

					{createPostStatus === RequestStatus.FAILED && (
						<ErrorMessage>
							An error occurred while creating post
						</ErrorMessage>
					)}

					<div className={styles.footer}>
						<Button
							variant={"secondary"}
							type={"button"}
							onClick={closeModal}
						>
							Cancel
						</Button>
						<Button
							disabled={
								createPostStatus === RequestStatus.LOADING
							}
						>
							{createPostStatus === RequestStatus.LOADING
								? "Loading ..."
								: "Create"}
						</Button>
					</div>
				</form>
			</Modal>
		</div>
	)
}
