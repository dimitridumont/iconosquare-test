import React from "react"
import { User } from "@/types/user"

interface Props {
	users: User[]
}

export const UsersListView = ({ users }: Props) => {
	return (
		<div>
			{users.map((user: User) => (
				<div key={user.id}>
					<div>{user.name}</div>
					<div>
						<span>{user.address.street}</span>{" "}
						<span>{user.address.city}</span>
					</div>
					<div>{user.phone}</div>
					<div>{user.website}</div>
					<div>
						<button>List posts</button>
					</div>
				</div>
			))}
		</div>
	)
}
