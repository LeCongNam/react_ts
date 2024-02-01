import { useState } from 'react'
import { Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import ReactPlayer from 'react-player'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'

// import 'swiper/swiper.scss'
import 'swiper/scss' // core Swiper
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/free-mode'
import 'swiper/scss/thumbs'

import './Swiper.scss'
//
export const SwiperImage = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null)

	// Define your array of image URLs
	const images = [
		'https://swiperjs.com/demos/images/nature-1.jpg',
		'https://swiperjs.com/demos/images/nature-2.jpg',
		'https://swiperjs.com/demos/images/nature-3.jpg',
		'https://swiperjs.com/demos/images/nature-2.jpg',
		'https://swiperjs.com/demos/images/nature-1.jpg',
		'https://swiperjs.com/demos/images/nature-2.jpg',
		'https://swiperjs.com/demos/images/nature-3.jpg',
		'https://swiperjs.com/demos/images/nature-2.jpg',
		'../../public/1.mp4',
	]

	return (
		<div
			style={{
				width: 500,
				marginTop: 100,
				marginLeft: 50,
				marginRight: 50,
			}}
		>
			<Swiper
				loop={true}
				spaceBetween={10}
				navigation={true}
				modules={[Navigation, Thumbs]}
				grabCursor={true}
				thumbs={{ swiper: thumbsSwiper && !thumbsSwiper?.destroyed ? thumbsSwiper : null }}
				className='mySwiper2'
			>
				{images.map((item, index) => (
					<SwiperSlide key={index}>
						{index === 8 ? (
							<ReactPlayer
								url={item}
								controls={true}
								playIcon={<PlayCircleIcon />}
								playing
							/>
						) : (
							<img
								src={item}
								alt={`Thumbnail ${index + 1}`}
								style={{
									width: '100%',
								}}
							/>
						)}
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				loop={true}
				spaceBetween={10}
				slidesPerView={4}
				modules={[Navigation, Thumbs]}
				className='mySwiper'
			>
				{images.map((item, index) => (
					<SwiperSlide key={index}>
						{index === 8 ? (
							<video
								style={{
									width: '100%',
								}}
							>
								<source
									src={item}
									type='video/mp4'
								/>
							</video>
						) : (
							<img
								src={item}
								alt={`Thumbnail ${index + 1}`}
								style={{
									width: '100%',
								}}
							/>
						)}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
