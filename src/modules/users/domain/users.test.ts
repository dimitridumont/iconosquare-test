import { User } from "@/types/user"
import { getUser, getUsersList } from "@/modules/users/domain/users.actions"
import { UsersInMemory } from "@/modules/users/infrastructure/users.in-memory"
import { fakeUsers } from "@/modules/users/infrastructure/users.fakes"

describe("[users] unit tests", () => {
	const usersOutput = new UsersInMemory()

	afterEach(() => {
		usersOutput.setShouldThrowError(false)
	})

	describe("When the user wants to get the users list", () => {
		it("should get the users list", async () => {
			const actualUsers: User[] = await getUsersList({ usersOutput })

			expect(actualUsers).toEqual(fakeUsers)
		})

		it("should throw error if there is an error", async () => {
			usersOutput.setShouldThrowError(true)

			await expect(getUsersList({ usersOutput })).rejects.toThrow()
		})
	})

	describe("When the user wants to get the user data", () => {
		const userID = 1

		it("should get the user data", async () => {
			const actualUser: User | undefined = await getUser({
				userID,
				usersOutput,
			})

			expect(actualUser).toEqual(fakeUsers[0])
		})

		it("shouldn't get the user data if there user doesn't exist", async () => {
			const actualUser: User | undefined = await getUser({
				userID: 0,
				usersOutput,
			})

			expect(actualUser).toEqual(undefined)
		})

		it("should throw error if there is an error", async () => {
			usersOutput.setShouldThrowError(true)

			await expect(getUser({ userID, usersOutput })).rejects.toThrow()
		})
	})
})
