import { RouterProvider } from 'react-router-dom'
import createRouter from './routes/routes'

import './App.scss'

function App() {
	return (
		<>
			<RouterProvider router={createRouter} />
		</>
	)
}

export default App
