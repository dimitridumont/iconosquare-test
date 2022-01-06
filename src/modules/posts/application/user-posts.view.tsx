import React from "react"
import { Post } from "@/types/post"
import { PostContainer } from "@/modules/posts/application/components/post/post.container"
import { User } from "@/types/user"
import styles from "./user-posts.module.scss"
import { RequestStatus } from "@/types/request-status"
import {
	DisplayAsyncData,
	DisplayAsyncDataMessages,
} from "@/components/display-async-data/display-async-data"
import { CreatePostModalContainer } from "@/modules/posts/application/components/create-post-modal/create-post-modal.container"

interface Props {
	user: User | undefined
	posts: Post[]
	thereIsNoPost: boolean
	getPostsStatus: RequestStatus
	thereIsNoUser: boolean
	getUserStatus: RequestStatus
	addNewPost: (post: Post) => void
}

export const UserPostsView = ({
	user,
	posts,
	thereIsNoPost,
	getPostsStatus,
	thereIsNoUser,
	getUserStatus,
	addNewPost,
}: Props) => {
	const getPostsMessages: DisplayAsyncDataMessages = {
		errorMessage: "An error occurred while retrieving user post",
		emptyDataMessage: "There is no post",
	}

	const getUserMessages: DisplayAsyncDataMessages = {
		errorMessage: "An error occurred while retrieving user data",
		emptyDataMessage: "The user doesn't exist",
	}

	return (
		<div className={styles.container}>
			<DisplayAsyncData
				status={getUserStatus}
				thereIsNoData={thereIsNoUser}
				messages={getUserMessages}
			>
				{user && (
					<div className={styles.header}>
						<h2 className={styles.title}>
							{`${user.name}'s posts`}
						</h2>

						<CreatePostModalContainer
							userID={user?.id}
							addNewPost={addNewPost}
						/>
					</div>
				)}
			</DisplayAsyncData>

			<DisplayAsyncData
				status={getPostsStatus}
				thereIsNoData={thereIsNoPost}
				messages={getPostsMessages}
			>
				<div className={styles.posts}>
					{posts.map((post: Post) => (
						<PostContainer key={post.id} post={post} />
					))}
				</div>
			</DisplayAsyncData>
		</div>
	)
}
