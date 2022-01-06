import React, { useState } from "react"
import { CreatePostModalView } from "@/modules/posts/application/components/create-post-modal/create-post-modal.view"
import { useForm } from "react-hook-form"
import { createPost } from "@/modules/posts/domain/posts.actions"
import { CreatePostDto } from "@/modules/posts/domain/dto/create-post.dto"
import { outputs } from "@/config/outputs"
import { Post } from "@/types/post"
import { RequestStatus } from "@/types/request-status"

interface FormFields {
	title: string
	body: string
}

interface Props {
	userID: number
	addNewPost: (post: Post) => void
}

export const CreatePostModalContainer = ({ userID, addNewPost }: Props) => {
	const { register, handleSubmit, reset } = useForm()

	const [isVisible, setIsVisible] = useState<boolean>(false)
	const [createPostStatus, setCreatePostStatus] = useState<RequestStatus>(
		RequestStatus.IDLE
	)

	const openModal = () => {
		setIsVisible(true)
	}

	const closeModal = () => {
		setIsVisible(false)
	}

	const _createPost = async (data: FormFields) => {
		setCreatePostStatus(RequestStatus.LOADING)

		try {
			const createPostDto: CreatePostDto = {
				...data,
				userID,
			}

			const post: Post = await createPost({
				createPostDto,
				postsOutput: outputs.postsOutput,
			})

			addNewPost(post)
			closeModal()
			reset()
			setCreatePostStatus(RequestStatus.COMPLETED)
		} catch (error) {
			setCreatePostStatus(RequestStatus.FAILED)
		}
	}

	return (
		<CreatePostModalView
			isVisible={isVisible}
			openModal={openModal}
			closeModal={closeModal}
			form={{
				register,
				createPost: handleSubmit(_createPost),
			}}
			createPostStatus={createPostStatus}
		/>
	)
}
