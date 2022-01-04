import { UsersApi } from "@/modules/users/infrastructure/users.api"
import { PostsApi } from "@/modules/posts/infrastructure/posts.api"
import { CommentsApi } from "@/modules/comments/infrastructure/comments.api"

export const outputs = {
	usersOutput: new UsersApi(),
	postsOutput: new PostsApi(),
	commentsOutput: new CommentsApi(),
}
