import React, { useEffect, useState } from "react"
import { Post } from "@/types/post"
import { outputs } from "@/config/outputs"
import { getUserPosts } from "@/modules/posts/domain/posts.actions"
import { useRouter } from "next/router"
import { User } from "@/types/user"
import { getUser } from "@/modules/users/domain/users.actions"
import { UserPostsView } from "@/modules/posts/application/user-posts.view"

export const UserPostsContainer = () => {
	const router = useRouter()

	const userID: number | undefined = router.query.userID
		? parseInt(router.query.userID.toString())
		: undefined

	const [posts, setPosts] = useState<Post[]>([])
	const [user, setUser] = useState<User | undefined>(undefined)

	useEffect(() => {
		_getUserPosts()
		_getUser()
	}, [userID])

	const _getUserPosts = async () => {
		if (userID) {
			try {
				const posts: Post[] = await getUserPosts({
					userID,
					postsOutput: outputs.postsOutput,
				})

				setPosts(posts)
			} catch (error) {
				console.warn(error)
			}
		}
	}

	const _getUser = async () => {
		if (userID) {
			try {
				const user: User | undefined = await getUser({
					userID,
					usersOutput: outputs.usersOutput,
				})

				setUser(user)
			} catch (error) {
				console.warn(error)
			}
		}
	}

	return <UserPostsView user={user} posts={posts} />
}
