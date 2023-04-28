import React, { useEffect, useState } from 'react'
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
import { useNavigate, redirect } from 'react-router-dom'

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
	const { setUser } = useGlobalContext()
	const { type } = props
	const navigate = useNavigate()

	// Not working yet
	const goTo = () => {
		redirect('/posts')
	}

	const loginUser = async () => {
		const loginUrl = 'http://localhost:3001/users'

		if (type === SignAction.signIn) {
			const loginUser = await axios
				.get(`${loginUrl}?email=${values.email}`)
				.then((res) => {
					const user = res.data[0]
					setUser(user)
				})
		} else {
			const addUser = await axios.post(loginUrl, values).then((res) => {
				const user = res.data
				setUser(user)
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
				placeholder={'Enter email...'}
				changeHandler={handleChange}
				variant={InputVariant.Dark}
				size={InputSize.Medium}
			/>
			<CustomTextField
				type={InputType.password}
				name={'password'}
				placeholder={'Enter password...'}
				changeHandler={handleChange}
				variant={InputVariant.Dark}
				size={InputSize.Medium}
			/>
			<CustomButton
				type={ButtonType.Submit}
				name={'submit'}
				label={type}
				changeHandler={handleSubmit}
				variant={InputVariant.Primary}
				size={InputSize.Medium}
			/>
		</Form>
	)
}

export default SignForm
