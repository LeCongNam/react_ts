import logo from '../../assets/logo.svg'
import search from '../../assets/search.svg'
import vietnamdong from '../../assets/vietnam.svg'
import arrowDown from '../../assets/arrow-down.svg'
import { Link, NavLink } from 'react-router-dom'
import { ROUTER_CONSTANT } from '../../routes/routes.tsx'

import './Header.scss'

export  function Header() {
		return (<div className="main-bg-color header__wrapper">
				<div className="box__border_logo"></div>

				<div className="header">
					<div className="left">
						<div className="logo">
							<Link to={ROUTER_CONSTANT.HOME}>
								<img src={logo} alt="logo.svg" />
							</Link>
						</div>
						<ul className="menu">
							<li>
								<NavLink to={ROUTER_CONSTANT.HOME}>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink to={ROUTER_CONSTANT.CATEGORIES}>
									Category
								</NavLink>
							</li>
							<li>
								<NavLink to={ROUTER_CONSTANT.HOME}>
								About
								</NavLink>
							</li>
							<li>
								<NavLink to={ROUTER_CONSTANT.HOME}>
								Contact
								</NavLink>
							</li>
						</ul>
					</div>

					<div className="right">
						<div className="search-box">
							<img src={search} alt="search.svg" />
							<input type="text" placeholder="Search something here!" />
						</div>

						<button className="join-community">
							Join the community
						</button>

						<div className='drop__down'>
							<div className="select-currency">
								<img src={vietnamdong} alt="vietnam.svg" className="icon__flag" />
								<span>VND</span>
								<img src={arrowDown} alt="arrowDown.svg"  className="icon_arrow" />
							</div>
							{/*Dropdown menu*/}
							<ul className="drop__down__menu">
								<li>
									<div className="select-currency">
										<img src={vietnamdong} alt="vietnam.svg" className="icon__flag" />
										<span>VND</span>
										<img src={arrowDown} alt="arrowDown.svg" />
									</div>
								</li>
								<li>
									<div className="select-currency">
										<img src={vietnamdong} alt="vietnam.svg" className="icon__flag" />
										<span>VND</span>
										<img src={arrowDown} alt="arrowDown.svg" />
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
		</div>)
}