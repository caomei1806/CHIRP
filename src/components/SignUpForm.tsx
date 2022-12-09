import React, { useState } from 'react'
import CustomTextField from './shared/formElements/CustomTextField'
import { InputSize, InputVariant } from './enums'

type Values = {
	email: string
	password: string
}

const SignUpForm = () => {
	const [values, setValues] = useState<Values>({
		email: '',
		password: '',
	})

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [event.target.name]: event.target.value })
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		console.log(values)
	}

	return (
		<form onSubmit={(event) => handleSubmit(event)}>
			<CustomTextField
				name={'email'}
				label={'email'}
				changeHandler={handleChange}
				variant={InputVariant.Primary}
				size={InputSize.Medium}
			/>
		</form>
	)
}

export default SignUpForm
