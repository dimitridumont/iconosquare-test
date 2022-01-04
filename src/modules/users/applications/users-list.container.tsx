import React, { useEffect, useState } from "react"
import { getUsersList } from "@/modules/users/domain/users.actions"
import { outputs } from "@/config/outputs"
import { User } from "@/types/user"
import { UsersListView } from "@/modules/users/applications/users-list.view"

export const UsersListContainer = () => {
	const [users, setUsers] = useState<User[]>([])
	const [usersList, setUsersList] = useState<User[]>([])

	useEffect(() => {
		_getUsersList()
	}, [])

	const _getUsersList = async () => {
		try {
			const users: User[] = await getUsersList({
				usersOutput: outputs.usersOutput,
			})

			setUsers(users)
			setUsersList(users)
		} catch (error) {
			console.warn(error)
		}
	}

	const filterUsers = (filter: string) => {
		const loweredFilter: string = filter.toLowerCase()

		const filteredUsers: User[] = users.filter(
			(user: User) =>
				user.name.toLowerCase().includes(loweredFilter) ||
				user.email.toLowerCase().includes(loweredFilter)
		)

		setUsersList(filteredUsers)
	}

	return <UsersListView usersList={usersList} filterUsers={filterUsers} />
}
