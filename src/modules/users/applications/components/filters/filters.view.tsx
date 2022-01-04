import React from "react"

interface Props {
	onChangeFilters: (event: any) => void
}

export const FiltersView = ({ onChangeFilters }: Props) => {
	return (
		<input
			type={"text"}
			placeholder={"Filter users by name or email"}
			onChange={onChangeFilters}
		/>
	)
}
