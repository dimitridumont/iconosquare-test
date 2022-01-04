import React from "react"
import ReactModal from "react-modal"
import styles from "./modal.module.scss"

interface ModalProps {
	title?: string
	children: React.ReactNode
	show: boolean
	onHide: () => void
}

export const Modal = ({ children, onHide, show, title }: ModalProps) => {
	return (
		<ReactModal
			ariaHideApp={false}
			isOpen={show}
			onRequestClose={onHide}
			className={styles.container}
			overlayClassName={styles.overlay}
		>
			<div className={styles.header}>
				{title && <h2 className={styles.title}>{title}</h2>}
			</div>

			<div className={styles.body}>{children}</div>
		</ReactModal>
	)
}
