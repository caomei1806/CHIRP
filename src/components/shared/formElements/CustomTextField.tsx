import React from 'react'
import { InputVariant, InputSize, InputType } from '../../enums'

type CustomTextFieldProps = {
	type: InputType
	name: string
	label: string
	changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
	variant: InputVariant
	size: InputSize
	password?: Boolean
}

const CustomTextField = (props: CustomTextFieldProps) => {
	const { type, name, label, changeHandler, variant, size, password } = props
	return (
		<>
			<label htmlFor={name}>{label}</label>
			<input
				type={type.toString()}
				name={name}
				id={`${name}-input`}
				className={`input-${variant} input-${size}`}
				onChange={changeHandler}
			/>
		</>
	)
}

export default CustomTextField
