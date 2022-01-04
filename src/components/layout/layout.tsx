import React from "react"
import styles from "./layout.module.scss"

interface Props {
	children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1 className={styles.title}>Iconosquare</h1>
			</header>

			<div className={styles.content}>{children}</div>
		</div>
	)
}
