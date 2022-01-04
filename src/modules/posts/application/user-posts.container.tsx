import React, { useEffect, useState } from "react"
import { Post } from "@/types/post"
import { outputs } from "@/config/outputs"
import { getUserPosts } from "@/modules/posts/domain/posts.actions"
import { useRouter } from "next/router"
import { User } from "@/types/user"
import { getUser } from "@/modules/users/domain/users.actions"
import { UserPostsView } from "@/modules/posts/application/user-posts.view"
import { RequestStatus } from "@/types/request-status"

export const UserPostsContainer = () => {
	const router = useRouter()

	const userID: number | undefined = router.query.userID
		? parseInt(router.query.userID.toString())
		: undefined

	const [posts, setPosts] = useState<Post[]>([])
	const [user, setUser] = useState<User | undefined>(undefined)
	const [getPostsStatus, setGetPostsStatus] = useState<RequestStatus>(
		RequestStatus.IDLE
	)
	const [getUserStatus, setGetUserStatus] = useState<RequestStatus>(
		RequestStatus.IDLE
	)

	useEffect(() => {
		_getUserPosts()
		_getUser()
	}, [userID])

	const _getUserPosts = async () => {
		if (userID) {
			try {
				setGetPostsStatus(RequestStatus.LOADING)

				const posts: Post[] = await getUserPosts({
					userID,
					postsOutput: outputs.postsOutput,
				})

				setPosts(posts)
				setGetPostsStatus(RequestStatus.COMPLETED)
			} catch (error) {
				setGetPostsStatus(RequestStatus.FAILED)
			}
		}
	}

	const _getUser = async () => {
		if (userID) {
			try {
				setGetUserStatus(RequestStatus.LOADING)

				const user: User | undefined = await getUser({
					userID,
					usersOutput: outputs.usersOutput,
				})

				setUser(user)
				setGetUserStatus(RequestStatus.COMPLETED)
			} catch (error) {
				setGetUserStatus(RequestStatus.FAILED)
			}
		}
	}

	const thereIsNoPost: boolean =
		getPostsStatus === RequestStatus.COMPLETED && posts.length === 0

	const thereIsNoUser: boolean =
		getUserStatus === RequestStatus.COMPLETED && !user

	return (
		<UserPostsView
			user={user}
			posts={posts}
			thereIsNoPost={thereIsNoPost}
			getPostsStatus={getPostsStatus}
			thereIsNoUser={thereIsNoUser}
			getUserStatus={getUserStatus}
		/>
	)
}
