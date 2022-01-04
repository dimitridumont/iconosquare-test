import React, { useEffect, useState } from "react"
import { getUsersList } from "@/modules/users/domain/users.actions"
import { outputs } from "@/config/outputs"
import { User } from "@/types/user"
import { UsersListView } from "@/modules/users/application/users-list.view"
import { RequestStatus } from "@/types/request-status"

export const UsersListContainer = () => {
	const [users, setUsers] = useState<User[]>([])
	const [usersList, setUsersList] = useState<User[]>([])
	const [getUsersStatus, setGetUsersStatus] = useState<RequestStatus>(
		RequestStatus.IDLE
	)

	useEffect(() => {
		_getUsersList()
	}, [])

	const _getUsersList = async () => {
		try {
			setGetUsersStatus(RequestStatus.LOADING)

			const users: User[] = await getUsersList({
				usersOutput: outputs.usersOutput,
			})

			setUsers(users)
			setUsersList(users)
			setGetUsersStatus(RequestStatus.COMPLETED)
		} catch (error) {
			setGetUsersStatus(RequestStatus.FAILED)
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

	const thereIsNoUser: boolean =
		getUsersStatus === RequestStatus.COMPLETED && usersList.length === 0

	return (
		<UsersListView
			usersList={usersList}
			filterUsers={filterUsers}
			thereIsNoUser={thereIsNoUser}
			getUsersStatus={getUsersStatus}
		/>
	)
}
