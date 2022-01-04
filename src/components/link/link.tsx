import NextLink, { LinkProps } from "next/link"

export interface Props extends LinkProps {
	children: any
	href: string
	className?: string
	target?: string
	rel?: string
}

export const Link = ({
	children,
	href,
	className,
	target,
	rel,
	...rest
}: Props) => {
	return (
		<NextLink href={href} {...rest}>
			<a className={className} target={target} rel={rel}>
				{children}
			</a>
		</NextLink>
	)
}
