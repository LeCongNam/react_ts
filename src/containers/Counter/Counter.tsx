import { useDispatch, useSelector } from 'react-redux'
import { SLICE_CONSTANT } from '../../redux/slice.constant'
import { decrease, increase } from '../../redux/slice/counterSlice'
import Header from '../../components/Header/Header'

function Counter() {
	const count = useSelector((state: any) => state[SLICE_CONSTANT.NAME.COUNTER])
	const dispatch = useDispatch()

	const handleIncreaseClick = () => {
		const action = increase()
		dispatch(action)
	}

	const handleDecreaseClick = () => {
		const action = decrease()
		dispatch(action)
	}

	return (
		<div>
			<Header />
			counter : {count}
			<div>
				<button onClick={handleIncreaseClick}>Tăng</button>
			</div>
			<div>
				<button onClick={handleDecreaseClick}>Giảm</button>
			</div>
		</div>
	)
}

export default Counter
