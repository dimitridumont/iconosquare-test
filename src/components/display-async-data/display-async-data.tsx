import React, { ReactElement, ReactNode } from "react"
import { RequestStatus } from "@/types/request-status"
import { Loader } from "@/components/loader/loader"
import { ErrorMessage } from "@/components/error-message/error-message"

export interface DisplayAsyncDataMessages {
	emptyDataMessage: string
	errorMessage: string
}

interface Props {
	status: RequestStatus
	thereIsNoData: boolean
	messages: DisplayAsyncDataMessages
	children: ReactNode
}

export const DisplayAsyncData = ({
	status,
	thereIsNoData,
	messages,
	children,
}: Props) => {
	const { emptyDataMessage, errorMessage } = messages

	const render = (): ReactElement => {
		switch (status) {
			case RequestStatus.LOADING:
				return <Loader color={"blue"} />
			case RequestStatus.COMPLETED:
				return <>{thereIsNoData ? emptyDataMessage : children}</>
			case RequestStatus.FAILED:
				return <ErrorMessage>{errorMessage}</ErrorMessage>
			default:
				return <></>
		}
	}

	return render()
}
