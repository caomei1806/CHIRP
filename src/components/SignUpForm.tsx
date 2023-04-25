import React, { useState } from 'react'
import CustomTextField from './shared/formElements/CustomTextField'
import { ButtonType, InputSize, InputVariant } from './enums'
import CustomButton from './shared/formElements/CustomButton'
import axios from 'axios'

type Values = {
	email: string
	password: string
}

const SignUpForm = () => {
	const [values, setValues] = useState<Values>({
		email: '',
		password: '',
	})

	const loginUser = () => {
		const loginUrl = 'http://localhost:3001/users'

		const addUser = () => axios.post(loginUrl, values)

		const ifUserExists = axios
			.get(`${loginUrl}?email=${values.email}`)
			.then((res) => {
				if (res.data.length > 0) {
					console.log(res.data)
				} else {
					addUser()
					console.log('abc')
				}
			})
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [event.target.name]: event.target.value })
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		loginUser()
		setValues({ email: '', password: '' })
	}

	return (
		<form onSubmit={(event) => handleSubmit(event)}>
			<CustomTextField
				name={'email'}
				label={'Enter email...'}
				changeHandler={handleChange}
				variant={InputVariant.Primary}
				size={InputSize.Medium}
			/>
			<CustomTextField
				name={'password'}
				label={'Enter password...'}
				changeHandler={handleChange}
				variant={InputVariant.Primary}
				size={InputSize.Medium}
				password={true}
			/>
			<CustomButton
				name={'submit'}
				label={'SignIn'}
				changeHandler={handleSubmit}
				variant={InputVariant.Primary}
				size={InputSize.Medium}
				type={ButtonType.Submit}
			/>
		</form>
	)
}

export default SignUpForm
