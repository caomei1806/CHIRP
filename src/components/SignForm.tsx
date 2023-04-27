import React, { useState } from 'react'
import CustomTextField from './shared/formElements/CustomTextField'
import {
	ButtonType,
	InputSize,
	InputType,
	InputVariant,
	SignAction,
} from './enums'
import CustomButton from './shared/formElements/CustomButton'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import { useGlobalContext } from '../context'

type Values = {
	email: string
	password: string
}
interface ISignForm {
	type: SignAction
}

const SignForm = (props: ISignForm) => {
	const [values, setValues] = useState<Values>({
		email: '',
		password: '',
	})
	const { user, setUser } = useGlobalContext()
	const { type } = props

	const loginUser = async () => {
		const loginUrl = 'http://localhost:3001/users'

		if (type === SignAction.signIn) {
			console.log(`${loginUrl}?email=${values.email}`)
			const loginUser = await axios
				.get(`${loginUrl}?email=${values.email}`)
				.then((res) => {
					const userId = res.data[0].id
					setUser(userId)
				})
		} else {
			const addUser = await axios.post(loginUrl, values).then((res) => {
				const userId = res.data.id
				setUser(userId)
			})
		}
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

export default SignForm
