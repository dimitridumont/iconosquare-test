import React from "react"
import styles from "./layout.module.scss"
import { Link } from "@/components/link/link"

interface Props {
	children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1>
					<Link href={"/"} className={styles.title}>
						Iconosquare
					</Link>
				</h1>
			</header>

			<div className={styles.content}>{children}</div>
		</div>
	)
}
