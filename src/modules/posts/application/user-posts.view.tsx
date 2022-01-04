import React from "react"
import { Post } from "@/types/post"
import { PostContainer } from "@/modules/posts/application/components/post/post.container"
import { User } from "@/types/user"
import styles from "./user-posts.module.scss"

interface Props {
	user: User | undefined
	posts: Post[]
}

export const UserPostsView = ({ user, posts }: Props) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{user && `${user.name}'s posts`}</h2>

			<div className={styles.posts}>
				{posts.map((post: Post) => (
					<PostContainer key={post.id} post={post} />
				))}
			</div>
		</div>
	)
}
