import NextLink, { LinkProps } from "next/link"
import styles from "./link.module.scss"

export interface Props extends LinkProps {
	children: any
	href: string
	className?: string
	target?: string
	rel?: string
	variant?: "link" | "button"
}

export const Link = ({
	children,
	href,
	className,
	target,
	rel,
	variant,
	...rest
}: Props) => {
	const customClassName: string =
		styles.container +
		" " +
		(variant ? styles[variant] : styles.link) +
		(className ? " " + className : "")

	return (
		<NextLink href={href} {...rest}>
			<a className={customClassName} target={target} rel={rel}>
				{children}
			</a>
		</NextLink>
	)
}
