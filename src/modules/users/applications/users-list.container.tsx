import React, { useEffect, useState } from "react"
import { getUsersList } from "@/modules/users/domain/users.actions"
import { outputs } from "@/config/outputs"
import { User } from "@/types/user"
import { UsersListView } from "@/modules/users/applications/users-list.view"

export const UsersListContainer = () => {
	const [users, setUsers] = useState<User[]>([])

	useEffect(() => {
		_getUsersList()
	}, [])

	const _getUsersList = async () => {
		try {
			const users: User[] = await getUsersList({
				usersOutput: outputs.usersOutput,
			})

			setUsers(users)
		} catch (error) {
			console.warn(error)
		}
	}

	return <UsersListView users={users} />
}
