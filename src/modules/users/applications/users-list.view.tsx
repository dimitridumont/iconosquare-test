import React from "react"
import { User } from "@/types/user"
import { FiltersContainer } from "@/modules/users/applications/components/filters/filters.container"
import { Link } from "@/components/link/link"

interface Props {
	usersList: User[]
	filterUsers: (filter: string) => void
}

export const UsersListView = ({ usersList, filterUsers }: Props) => {
	return (
		<>
			<FiltersContainer filterUsers={filterUsers} />

			<div>
				{usersList.map((user: User) => (
					<div key={user.id}>
						<div>
							<div>{user.name}</div>
							<div>{user.email}</div>
						</div>
						<div>
							<span>{user.address.street}</span>{" "}
							<span>{user.address.city}</span>
						</div>
						<div>{user.phone}</div>
						<div>
							<Link
								href={user.website}
								target="_blank"
								rel="noopener, noreferrer"
							>
								{user.website}
							</Link>
						</div>
						<div>
							<Link href={"/"}>List posts</Link>
						</div>
					</div>
				))}
			</div>
		</>
	)
}
