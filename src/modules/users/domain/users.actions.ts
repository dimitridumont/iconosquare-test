import { UsersOutput } from "@/modules/users/domain/users.output"

export const getUsersList = async ({
	usersOutput,
}: {
	usersOutput: UsersOutput
}) => {
	try {
		return await usersOutput.getUsersList()
	} catch (error: any) {
		throw new Error(error)
	}
}

export const getUser = async ({
	userID,
	usersOutput,
}: {
	userID: number
	usersOutput: UsersOutput
}) => {
	try {
		return await usersOutput.getUser(userID)
	} catch (error: any) {
		throw new Error(error)
	}
}
