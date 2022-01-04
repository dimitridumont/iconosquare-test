import { User } from "@/types/user"

export interface UsersOutput {
	getUsersList(): Promise<User[]>
}
