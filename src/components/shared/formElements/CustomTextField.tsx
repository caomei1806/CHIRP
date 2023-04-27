import React from 'react'
import { InputVariant, InputSize, InputType } from '../../enums'
import Form from 'react-bootstrap/Form'
import '../../scss/input.scss'

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
	const { type, name, label, changeHandler, variant, size } = props
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
				/>
			)}
		</Form.Group>
	)
}

export default CustomTextField
