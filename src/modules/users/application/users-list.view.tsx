import React from "react"
import { User } from "@/types/user"
import { FiltersContainer } from "@/modules/users/application/components/filters/filters.container"
import { Link } from "@/components/link/link"
import styles from "./users-list.module.scss"

interface Props {
	usersList: User[]
	filterUsers: (filter: string) => void
}

export const UsersListView = ({ usersList, filterUsers }: Props) => {
	return (
		<>
			<FiltersContainer filterUsers={filterUsers} />

			<div className={styles.container}>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>Name</th>
							<th>Address</th>
							<th>Phone</th>
							<th>Website</th>
							<th>Edit</th>
						</tr>
					</thead>
					<tbody>
						{usersList.map((user: User) => (
							<tr key={user.id}>
								<td>
									<div className={styles.userName}>
										{user.name}
									</div>
									<div>
										<Link
											href={"mailto:" + user.email}
											className={styles.userEmail}
										>
											{user.email}
										</Link>
									</div>
								</td>
								<td>
									<span>{user.address.street}</span>
									{", "}
									<span className={styles.userCity}>
										{user.address.city}
									</span>
								</td>
								<td>{user.phone}</td>
								<td>
									<Link
										href={user.website}
										target="_blank"
										rel="noopener, noreferrer"
									>
										{user.website}
									</Link>
								</td>
								<td>
									<Link
										href={`/users/${user.id}`}
										variant={"button"}
									>
										List posts
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	)
}
