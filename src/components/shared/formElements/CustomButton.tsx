import React from 'react'
import { InputVariant, InputSize, ButtonType } from '../../enums'
import Button from 'react-bootstrap/Button'
type CustomButtonProps = {
	name: string
	label: string
	changeHandler?: (event: React.FormEvent<HTMLFormElement>) => void
	variant: InputVariant
	size: InputSize
	type: ButtonType
}

const CustomButton = (props: CustomButtonProps) => {
	const { name, label, changeHandler, variant, size, type } = props
	return (
		<Button
			id={`${name}-button`}
			className={`btn-${variant} btn-${size}`}
			type={type}
		>
			{label}
		</Button>
	)
}

export default CustomButton
