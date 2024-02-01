import banner from '../../assets/banner.png'
import playVideo from '../../assets/play_video.svg'

import './Banner.scss'

export  function Banner() {
	return (<div className="main-bg-color banner_wrapper">
		<div className="banner">
			<div className="left">
					<span className="one_more_paragraph">One more friend</span>
				<span className="thousand">Thousands more fun!</span>
				<p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>

				<div className="btn__wrapper">
					<button className="btn__play">
						View Intro
						<img src={playVideo} alt="playVideo.svg" />
					</button>
					<button className="btn__explore">Explore Now</button>
				</div>
			</div>
			<div className="right">
				<img src={banner} alt="banner.png" className="banner__img" />
			</div>
		</div>
	</div>)
}