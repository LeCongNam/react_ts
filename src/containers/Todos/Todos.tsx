import InputField from '../../components/FormConrol/InputField/InputField'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup
	.object({
		title: yup.string().required('Please fill data input'),
	})
	.required()

function Todos() {
	const form = useForm<{ title: string }>({
		defaultValues: { title: '' },
		resolver: yupResolver(schema),
		mode: 'onChange',
	})

	const handleSubmitForm = (value: any) => {
		console.log('Todo form', value)
	}

	return (
		<div>
			Todos
			<form onSubmit={form.handleSubmit(handleSubmitForm)}>
				<InputField
					label='name'
					name='title'
					form={form}
					placeholder='Test'
				/>
			</form>
		</div>
	)
}

export default Todos
