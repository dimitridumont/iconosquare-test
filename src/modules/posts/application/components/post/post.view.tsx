import React from "react"
import { Post } from "@/types/post"

interface Props {
	post: Post
}

export const PostView = ({ post }: Props) => {
	return (
		<div>
			<h3>{post.title}</h3>

			<div>{post.body}</div>
		</div>
	)
}
