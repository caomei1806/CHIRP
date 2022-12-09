import React from 'react'

enum InputVariant {
	Primary,
	Secondary,
	Light,
	Dark,
}
enum InputSize {
	Small,
	Medium,
	Large,
}
type CustomButtonProps = {
	name: string
	changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
	variant: InputVariant
	size: InputSize
}

const CustomButton = (props: CustomButtonProps) => {
	const { name, changeHandler, variant, size } = props
	return (
		<button
			id={`${name}-button`}
			className={`btn-${variant} btn-${size}`}
		></button>
	)
}

export default CustomButton
