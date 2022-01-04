import { UsersOutput } from "@/modules/users/domain/users.output"
import { User } from "@/types/user"
import { fakeUsers } from "@/modules/users/infrastructure/users.fakes"
import { ThrowErrorInMemory } from "@/modules/share/throw-error.in-memory"

export class UsersInMemory extends ThrowErrorInMemory implements UsersOutput {
	getUsersList(): Promise<User[]> {
		if (this.shouldThrowError) throw new Error()

		return Promise.resolve(fakeUsers)
	}

	getUser(userID: number): Promise<User | undefined> {
		if (this.shouldThrowError) throw new Error()

		const user: User | undefined = fakeUsers.find(
			(user: User) => user.id === userID
		)

		return Promise.resolve(user)
	}
}
