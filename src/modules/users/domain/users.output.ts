import { User } from "@/types/user"

export interface UsersOutput {
	getUsersList(): Promise<User[]>

	getUser(userID: number): Promise<User | undefined>
}
