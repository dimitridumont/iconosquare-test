import React from "react"
import { Post } from "@/types/post"
import { PostView } from "@/modules/posts/application/components/post.view"

interface Props {
	post: Post
}

export const PostContainer = ({ post }: Props) => {
	return <PostView post={post} />
}
