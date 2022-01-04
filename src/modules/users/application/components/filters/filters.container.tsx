import React from "react"
import { FiltersView } from "@/modules/users/application/components/filters/filters.view"

interface Props {
	filterUsers: (filter: string) => void
}

export const FiltersContainer = ({ filterUsers }: Props) => {
	const onChangeFilters = (event: any) => {
		const value: string = event.target.value

		filterUsers(value)
	}

	return <FiltersView onChangeFilters={onChangeFilters} />
}
