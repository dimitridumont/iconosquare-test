import React, { ReactNode } from "react"
import styles from "./button.module.scss"

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode
	variant?: "primary" | "secondary"
}

export const Button = ({ children, variant, ...rest }: Props) => {
	const customClassName = `${styles.container} ${
		rest.className ? rest.className : ""
	} ${variant ? styles[variant] : ""}`

	return (
		<button {...rest} className={customClassName}>
			{children}
		</button>
	)
}
