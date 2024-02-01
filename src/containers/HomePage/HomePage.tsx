import { Header } from '../../Layouts/Header/Header.tsx'
import { Banner } from '../../Layouts/Banner/Banner.tsx'
import ListProduct from '../../Layouts/ListProduct/ListProduct.tsx'
import arrowRight from '../../assets/arrow-right.svg'

import './HomePage.scss'

export function HomePage() {
	return (
		<div className='homepage'>
			<Header />
			<Banner />
			<div className='main__layout title__home'>
				<span>Whats new?</span>
				<div className='viewmore__wrapper'>
					<span>Take a look at some of our pets</span>
					<button className='btn__viewmore'>
						View more{' '}
						<img
							src={arrowRight}
							alt='arrowRight.svg'
						/>
					</button>
				</div>
			</div>
			<ListProduct />
		</div>
	)
}
