import React from "react"
import ReactLoaderSpinner from "react-loader-spinner"
import styles from "./loader.module.scss"

interface Props {
	color: "blue" | "white"
}

export const Loader = ({ color }: Props) => {
	const colorVariant: string = color === "blue" ? "#0d5abf" : "#ffffff"

	return (
		<div className={styles.container}>
			<ReactLoaderSpinner
				type={"Oval"}
				width={30}
				height={30}
				color={colorVariant}
			/>
		</div>
	)
}
