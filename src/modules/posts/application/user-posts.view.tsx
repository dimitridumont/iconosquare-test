import React from "react"
import { Post } from "@/types/post"
import { PostContainer } from "@/modules/posts/application/components/post.container"
import { User } from "@/types/user"

interface Props {
	user: User | undefined
	posts: Post[]
}

export const UserPostsView = ({ user, posts }: Props) => {
	return (
		<>
			<h2>{user && `${user.name}'s posts`}</h2>

			<div>
				{posts.map((post: Post) => (
					<PostContainer key={post.id} post={post} />
				))}
			</div>
		</>
	)
}
