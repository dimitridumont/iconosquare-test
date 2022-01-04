import type { NextPage } from "next"
import { UserPostsContainer } from "@/modules/posts/application/user-posts.container"
import { Layout } from "@/components/layout/layout"

const UserPage: NextPage = () => {
	return (
		<Layout>
			<UserPostsContainer />
		</Layout>
	)
}

export default UserPage
