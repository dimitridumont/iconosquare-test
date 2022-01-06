import React from "react"
import { User } from "@/types/user"
import { FiltersContainer } from "@/modules/users/application/components/filters/filters.container"
import { Link } from "@/components/link/link"
import styles from "./users-list.module.scss"
import { RequestStatus } from "@/types/request-status"
import {
	DisplayAsyncData,
	DisplayAsyncDataMessages,
} from "@/components/display-async-data/display-async-data"

interface Props {
	usersList: User[]
	filterUsers: (filter: string) => void
	thereIsNoUser: boolean
	getUsersStatus: RequestStatus
}

export const UsersListView = ({
	usersList,
	filterUsers,
	thereIsNoUser,
	getUsersStatus,
}: Props) => {
	const messages: DisplayAsyncDataMessages = {
		errorMessage: "An error occurred while retrieving users",
		emptyDataMessage: "There is no user",
	}

	return (
		<DisplayAsyncData
			thereIsNoData={thereIsNoUser}
			messages={messages}
			status={getUsersStatus}
		>
			<>
				<FiltersContainer filterUsers={filterUsers} />

				<div className={styles.container}>
					<table className={styles.table}>
						<thead>
							<tr className={styles.row}>
								<th className={styles.headerCell}>Name</th>
								<th className={styles.headerCell}>Address</th>
								<th className={styles.headerCell}>Phone</th>
								<th className={styles.headerCell}>Website</th>
								<th className={styles.headerCell}>Edit</th>
							</tr>
						</thead>
						<tbody>
							{usersList.map((user: User) => (
								<tr key={user.id} className={styles.row}>
									<td className={styles.cell}>
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
									<td className={styles.cell}>
										<span>{user.address.street}</span>
										{", "}
										<span className={styles.userCity}>
											{user.address.city}
										</span>
									</td>
									<td className={styles.cell}>
										{user.phone}
									</td>
									<td className={styles.cell}>
										<Link
											href={user.website}
											target="_blank"
											rel="noopener, noreferrer"
										>
											{user.website}
										</Link>
									</td>
									<td
										className={
											styles.cell +
											" " +
											styles.actionCell
										}
									>
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
		</DisplayAsyncData>
	)
}
