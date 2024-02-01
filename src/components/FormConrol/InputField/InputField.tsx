import { TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'

interface InputField {
	name: string
	form: UseFormReturn
	label: string
	disabled?: boolean
	placeholder: string
}

function InputField(props: InputField) {
	const [hasError, setHasError] = useState<boolean>(false)
	const [hasChange, setHasChange] = useState<boolean>(false)
	const { name, form, label, disabled = false, placeholder } = props
	const { formState, control } = form

	useEffect(() => {
		setHasError(!!(formState.touchedFields?.[name] && formState?.errors[name]?.message))
	}, [hasChange])

	return (
		<>
			<Controller
				render={({ field: { value, onChange, onBlur, ...rest }, formState }) => (
					<TextField
						{...rest}
						label={label}
						placeholder={placeholder}
						error={hasError}
						helperText={formState?.errors[name]?.message as string}
						disabled={disabled}
						onChange={(e) => {
							onChange(e)

							setHasChange(!!(formState.touchedFields?.[name] && formState?.errors[name]?.message))
						}}
						onBlur={() => {
							onBlur()
							setHasChange(!!(formState.touchedFields?.[name] && formState?.errors[name]?.message))
						}}
						value={value}
					/>
				)}
				name={name}
				control={control}
				// defaultValue=''
			/>
		</>
	)
}

export default InputField
