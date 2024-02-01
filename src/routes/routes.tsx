import { RouteObject, createBrowserRouter } from 'react-router-dom'
import Counter from '../containers/Counter/Counter'
import Todos from '../containers/Todos/Todos'
import { HomePage } from '../containers/HomePage/HomePage.tsx'

export  const ROUTER_CONSTANT = {
	HOME: '/',
	CATEGORIES: '/categories'
}


const privateRouter: RouteObject[] = []

 const publicRouter: RouteObject[] = [
	{
		path: '/todos',
		element: <Todos />,
	},
	{
		path: '/count',
		element: <Counter />,
	},
	{
		path: '/',
		element: <HomePage/>,
	},
]

const createRouter = createBrowserRouter([...publicRouter, ...privateRouter])

export default createRouter
