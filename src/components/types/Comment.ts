export type CommentType = {
	id?: Number,
	comment: String,
	postId: Number,
	commentorId: Number,
	commentorEmail: String,
	postedAt?: Date
}