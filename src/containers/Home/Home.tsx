import { useEffect, useState } from 'react'
import { categoryApi } from '../../apis/category.api'
import { Button } from '@mui/material'

function Home() {
	const [count, setCount] = useState(0)

	useEffect(() => {}, [])

	const getProducts = async () => {
		const data = await categoryApi.get()
		console.log(data)
	}

	return (
		<>
			<h1>{count}</h1>

			<Button
				className='text-red-400'
				onClick={() => getProducts()}
			>
				Button
			</Button>
		</>
	)
}

export default Home
