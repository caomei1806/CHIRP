import axios from 'axios'
import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import { InputSize, InputType, InputVariant } from './enums'
import CustomTextField from './shared/formElements/CustomTextField'

type Values = {
	comment: string
	postId: Number
	commentorId: Number
	commentorEmail: String
}
interface ICommentAdd {
	postId: Number
}
const CommentAdd = (props: ICommentAdd) => {
	const { user } = useGlobalContext()
	const { postId } = props
	const [values, setValues] = useState<Values>({
		comment: '',
		postId: postId,
		commentorId: user.id,
		commentorEmail: user.email,
	})
	const commentsUrl = `http://localhost:3001/comments`

	const postComment = async () => {
		if (values.comment) {
			const newComment = await axios
				.post(commentsUrl, values)
				.then((res) => res.status)
		}
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [event.target.name]: event.target.value })
	}

	const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			event.preventDefault()

			postComment()
			setValues({ ...values, comment: '' })
		}
	}
	return (
		<>
			<CustomTextField
				type={InputType.text}
				name={'comment'}
				changeHandler={handleChange}
				variant={InputVariant.Dark}
				size={InputSize.Medium}
				placeholder={'Add comment...'}
				submitHandler={handleSubmit}
				value={values.comment}
			/>
		</>
	)
}

export default CommentAdd
