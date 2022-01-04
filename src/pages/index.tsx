import type { NextPage } from "next"
import { UsersListContainer } from "@/modules/users/application/users-list.container"
import { Layout } from "@/components/layout/layout"

const HomePage: NextPage = () => {
	return (
		<Layout>
			<UsersListContainer />
		</Layout>
	)
}

export default HomePage
