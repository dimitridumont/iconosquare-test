import { User } from "@/types/user"
import { api } from "@/config/api"
import { UsersOutput } from "@/modules/users/domain/users.output"

export class UsersApi implements UsersOutput {
	getUsersList(): Promise<User[]> {
		return api.get("/users").then(({ data }: { data: User[] }) => data)
	}
}
