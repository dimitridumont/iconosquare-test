import React, { useState } from "react"
import { CreatePostModalView } from "@/modules/posts/application/components/create-post-modal/create-post-modal.view"

export const CreatePostModalContainer = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false)

	const openModal = () => {
		setIsVisible(true)
	}

	const closeModal = () => {
		setIsVisible(false)
	}

	return (
		<CreatePostModalView
			isVisible={isVisible}
			openModal={openModal}
			closeModal={closeModal}
		/>
	)
}
