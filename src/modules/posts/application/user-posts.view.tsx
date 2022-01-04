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

interface Props {
	user: User | undefined
	posts: Post[]
	thereIsNoPost: boolean
	getPostsStatus: RequestStatus
}

export const UserPostsView = ({
	user,
	posts,
	thereIsNoPost,
	getPostsStatus,
}: Props) => {
	const getPostsMessages: DisplayAsyncDataMessages = {
		errorMessage: "An error occurred while retrieving user post",
		emptyDataMessage: "There is no post",
	}

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{user && `${user.name}'s posts`}</h2>

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
