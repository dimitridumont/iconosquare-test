import { UsersApi } from "@/modules/users/infrastructure/users.api"

export const outputs = {
	usersOutput: new UsersApi(),
}
