import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Comment from './Comment'
import CommentAdd from './CommentAdd'
import { CommentType } from './types/Comment'
import './scss/Comment.scss'
interface ICommentSection {
	postId: Number
}
const CommentSection = (props: ICommentSection) => {
	const { postId } = props
	const [comments, setComments] = useState<CommentType[]>()
	const commentsUrl = `http://localhost:3001/comments?postId=${postId}`

	const getComments = async () => {
		const fetchedComments = await axios.get(commentsUrl).then((res) => {
			setComments(res.data)
		})
	}
	useEffect(() => {
		const interval = setInterval(() => {
			getComments()
		}, 1000)
		return () => clearInterval(interval)
	}, [])
	return (
		<div className='commentSection'>
			<main>
				{comments?.map((comment, index) => {
					return <Comment key={`comment-${index}`} comment={comment} />
				})}
			</main>
			<footer>
				<CommentAdd postId={postId} />
			</footer>
		</div>
	)
}

export default CommentSection
