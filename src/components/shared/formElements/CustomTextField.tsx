import React, { createRef, useEffect } from 'react'
import { InputVariant, InputSize, InputType } from '../../enums'
import Form from 'react-bootstrap/Form'
import '../../scss/Input.scss'

type CustomTextFieldProps = {
	type: InputType
	name: string
	label?: string
	changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
	variant: InputVariant
	size: InputSize
	placeholder?: String
	submitHandler?: (event: React.KeyboardEvent<HTMLInputElement>) => void
	value?: string
}

const CustomTextField = (props: CustomTextFieldProps) => {
	const {
		type,
		name,
		label,
		changeHandler,
		variant,
		size,
		placeholder,
		submitHandler,
		value,
	} = props

	return (
		<Form.Group>
			<Form.Label htmlFor={name}>{label}</Form.Label>

			{type === 'file' ? (
				<div className='input-customBox'>
					<Form.Control
						type={type.toString()}
						name={name}
						id={`${name}-input`}
						className={`input-${variant} input-${size}`}
						onChange={changeHandler}
						placeholder={placeholder?.toString()}
					/>
					<div className='input-overlay'></div>
				</div>
			) : (
				<Form.Control
					type={type.toString()}
					name={name}
					id={`${name}-input`}
					className={`input-${variant} input-${size}`}
					onChange={changeHandler}
					placeholder={placeholder?.toString()}
					onKeyDown={submitHandler}
					value={value}
				/>
			)}
		</Form.Group>
	)
}

export default CustomTextField
