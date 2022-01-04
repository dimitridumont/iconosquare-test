import React from "react"

interface Props {
	children: React.ReactNode
}

export const ErrorMessage = ({ children }: Props) => {
	return <div>{children}</div>
}
