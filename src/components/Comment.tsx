import axios from 'axios'
import React, { useEffect, createRef, useState } from 'react'
import { CommentType } from './types/Comment'
import { BsThreeDots } from 'react-icons/bs'
import { RiDeleteBin2Line } from 'react-icons/ri'
import { useGlobalContext } from '../context'

interface IComment {
	comment: CommentType
}
const Comment = (props: IComment) => {
	const { id, comment, commentorId, commentorEmail } = props.comment
	const [username, setUsername] = useState<String>()
	const { user } = useGlobalContext()
	const [settingsShown, setSettingsShown] = useState<Boolean>(false)

	const getUsername = async () => {
		const username = commentorEmail?.split('@')[0]
		setUsername(username)
	}
	useEffect(() => {
		getUsername()
	}, [])

	const deletePost = async () => {
		const commentsUrl = `http://localhost:3001/comments`

		const deletePost = await axios
			.delete(`${commentsUrl}/${id}`)
			.then((res) => res.status)
	}

	return (
		<span className='comment'>
			<span className='comment-username'>{username}</span>
			{comment}
			{user.id === commentorId && (
				<span className='comment-settings'>
					{settingsShown && (
						<RiDeleteBin2Line className='comment-delete' onClick={deletePost} />
					)}
					<BsThreeDots onClick={() => setSettingsShown(!settingsShown)} />
				</span>
			)}
		</span>
	)
}

export default Comment
