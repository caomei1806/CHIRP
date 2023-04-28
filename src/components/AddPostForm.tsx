import axios from 'axios'
import React, { useState } from 'react'
import CustomTextField from './shared/formElements/CustomTextField'
import { PostType } from './types/Post'
import { ButtonType, InputSize, InputType, InputVariant } from './enums'
import CustomButton from './shared/formElements/CustomButton'
import { useGlobalContext } from '../context'

const AddPostForm = () => {
	const { user } = useGlobalContext()
	const ownerId = user.id
	const [values, setValues] = useState<PostType>({
		imageUrl: '',
		caption: '',
		ownerId: ownerId,
	})

	const uploadImage = async (imageFile: File) => {
		if (imageFile) {
			const postUrl = 'https://api.cloudinary.com/v1_1/dqd3dzadw/image/upload'

			const formData = new FormData()
			formData.append('file', imageFile)
			formData.append('upload_preset', 'c0u25rqy')

			const res = await axios
				.post(postUrl, formData)
				.then((res) => {
					setValues({ ...values, imageUrl: res.data.secure_url })
					console.log({ ...values, imageUrl: res.data.secure_url })
				})
				.catch((err) => console.log(err))
		}
	}

	const addPost = async () => {
		const postUrl = 'http://localhost:3001/posts'

		const { imageUrl, caption } = values
		console.log(imageUrl, caption)
		const res = await axios
			.post(postUrl, { ...values })
			.then((res) => {
				console.log(res)
				setValues({ imageUrl: '', ownerId: 0, caption: '' })
			})
			.catch((err) => console.log(err))
	}

	const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.type === 'file') {
			const target = event.target as HTMLInputElement
			const files = target.files

			if (files) {
				const file = files[0]
				//setImageFile(file)

				const upload = await uploadImage(file)
			}
		} else setValues({ ...values, [event.target.name]: event.target.value })
	}

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const post = await addPost()
	}
	return (
		<form onSubmit={(event) => handleSubmit(event)}>
			<CustomTextField
				type={InputType.file}
				name={'imageUrl'}
				label={'Upload picture...'}
				changeHandler={handleChange}
				variant={InputVariant.Primary}
				size={InputSize.Medium}
			/>
			<CustomTextField
				type={InputType.text}
				name={'caption'}
				label={'Add your caption...'}
				changeHandler={handleChange}
				variant={InputVariant.Primary}
				size={InputSize.Medium}
			/>
			<CustomButton
				type={ButtonType.Submit}
				name={'submit'}
				label={'Upload'}
				changeHandler={handleSubmit}
				variant={InputVariant.Primary}
				size={InputSize.Medium}
			/>
		</form>
	)
}

export default AddPostForm
