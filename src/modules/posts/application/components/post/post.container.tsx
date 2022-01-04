import React, { useState } from "react"
import { Post } from "@/types/post"
import { PostView } from "@/modules/posts/application/components/post/post.view"

interface Props {
	post: Post
}

export const PostContainer = ({ post }: Props) => {
	const [isCommentsModalVisible, setIsCommentsModalVisible] =
		useState<boolean>(false)

	const openCommentsModal = () => {
		setIsCommentsModalVisible(true)
	}

	const closeCommentsModal = () => {
		setIsCommentsModalVisible(false)
	}

	return (
		<PostView
			post={post}
			isCommentsModalVisible={isCommentsModalVisible}
			openCommentsModal={openCommentsModal}
			closeCommentsModal={closeCommentsModal}
		/>
	)
}
