import React from 'react'
import { InputVariant, InputSize, ButtonType } from '../../enums'
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
		<button
			id={`${name}-button`}
			className={`btn-${variant} btn-${size}`}
			type={type}
		>
			{label}
		</button>
	)
}

export default CustomButton
