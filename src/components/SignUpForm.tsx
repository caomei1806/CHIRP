import React, { useState } from 'react'
import CustomTextField from './shared/formElements/CustomTextField'
import { ButtonType, InputSize, InputType, InputVariant } from './enums'
import CustomButton from './shared/formElements/CustomButton'
import axios from 'axios'
import Form from 'react-bootstrap/Form'

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
		<Form onSubmit={(event) => handleSubmit(event)}>
			<CustomTextField
				type={InputType.text}
				name={'email'}
				label={'Enter email...'}
				changeHandler={handleChange}
				variant={InputVariant.Primary}
				size={InputSize.Medium}
			/>
			<CustomTextField
				type={InputType.password}
				name={'password'}
				label={'Enter password...'}
				changeHandler={handleChange}
				variant={InputVariant.Primary}
				size={InputSize.Medium}
				password={true}
			/>
			<CustomButton
				type={ButtonType.Submit}
				name={'submit'}
				label={'SignIn'}
				changeHandler={handleSubmit}
				variant={InputVariant.Primary}
				size={InputSize.Medium}
			/>
		</Form>
	)
}

export default SignUpForm
