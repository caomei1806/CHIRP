import axios from 'axios'
import React, { useState } from 'react'
import CustomTextField from './shared/formElements/CustomTextField'
import { Post } from './types/Post'
import { ButtonType, InputSize, InputType, InputVariant } from './enums'
import CustomButton from './shared/formElements/CustomButton'

const AddPostForm = () => {
	const [values, setValues] = useState<Post>({
		imageUrl: '',
		caption: '',
		ownerId: '1',
	})
	const [imageFile, setImageFile] = useState<File>()

	const uploadImage = async () => {
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
		if (imageUrl && caption) {
			console.log('hihi')
			const res = await axios
				.post(postUrl, values)
				.then((res) => {
					console.log(res)
					setValues({ imageUrl: '', ownerId: '', caption: '' })
				})
				.catch((err) => console.log(err))
		}
	}

	const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.type === 'file') {
			const target = event.target as HTMLInputElement
			const files = target.files

			if (files) {
				const file = files[0]
				setImageFile(file)
			}
		} else setValues({ ...values, [event.target.name]: event.target.value })
	}

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const upload = await uploadImage()
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
				password={true}
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
