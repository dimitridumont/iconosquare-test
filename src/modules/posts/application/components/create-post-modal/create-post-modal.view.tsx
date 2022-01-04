import React from "react"
import { Modal } from "@/components/modal/modal"
import styles from "./create-post-modal.module.scss"
import { Button } from "@/components/button/button"

interface Props {
	isVisible: boolean
	openModal: () => void
	closeModal: () => void
}

export const CreatePostModalView = ({
	isVisible,
	openModal,
	closeModal,
}: Props) => {
	return (
		<div className={styles.container}>
			<Button onClick={openModal}>Create new post</Button>

			<Modal
				show={isVisible}
				onHide={closeModal}
				title={"Create new post"}
			>
				<form>
					<div className={styles.row}>
						<label className={styles.label}>Title</label>
						<input
							className={styles.input}
							type={"text"}
							required={true}
						/>
					</div>

					<div className={styles.row}>
						<label className={styles.label}>Content</label>
						<textarea
							className={styles.textarea}
							rows={5}
							required={true}
						/>
					</div>

					<div className={styles.footer}>
						<Button
							variant={"secondary"}
							type={"button"}
							onClick={closeModal}
						>
							Cancel
						</Button>
						<Button className={styles.create}>Create</Button>
					</div>
				</form>
			</Modal>
		</div>
	)
}
