import React from "react"
import ReactModal from "react-modal"

interface ModalProps {
	title?: string
	children: React.ReactNode
	className?: string
	show: boolean
	onHide: () => void
}

export const Modal = ({
	children,
	className,
	onHide,
	show,
	title,
}: ModalProps) => {
	return (
		<ReactModal
			ariaHideApp={false}
			isOpen={show}
			onRequestClose={onHide}
			className={className}
		>
			<div onClick={onHide}>X</div>
			{title && <h2>{title}</h2>}
			{children}
		</ReactModal>
	)
}
