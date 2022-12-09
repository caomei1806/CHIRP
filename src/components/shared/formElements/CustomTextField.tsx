import React from 'react'
import { InputVariant, InputSize } from '../../enums'

type CustomTextFieldProps = {
	name: string
	label: string
	changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
	variant: InputVariant
	size: InputSize
}

const CustomTextField = (props: CustomTextFieldProps) => {
	const { name, label, changeHandler, variant, size } = props
	return (
		<>
			<label htmlFor={name}>{label}</label>
			<input
				type='text'
				name={name}
				id={`${name}-input`}
				className={`input-${variant} input-${size}`}
				onChange={changeHandler}
			/>
		</>
	)
}

export default CustomTextField
