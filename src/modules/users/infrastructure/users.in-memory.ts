import { UsersOutput } from "@/modules/users/domain/users.output"
import { User } from "@/types/user"
import { fakeUsers } from "@/modules/users/infrastructure/users.fakes"

export class UsersInMemory implements UsersOutput {
	private shouldThrowError: boolean = false

	setShouldThrowError(shouldThrowError: boolean) {
		this.shouldThrowError = shouldThrowError
	}

	getUsersList(): Promise<User[]> {
		if (this.shouldThrowError) throw new Error()

		return Promise.resolve(fakeUsers)
	}
}
