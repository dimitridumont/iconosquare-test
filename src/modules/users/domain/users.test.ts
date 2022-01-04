import { User } from "@/types/user"
import { getUsersList } from "@/modules/users/domain/users.actions"
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
})
