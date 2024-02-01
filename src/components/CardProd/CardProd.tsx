import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

import prod1 from '../../assets/product1.png'

import './CardProduct.scss'
import { Link } from 'react-router-dom'
import { ROUTER_CONSTANT } from '../../routes/routes'

export default function CardProduct() {
	return (
		<Card
			sx={{ maxWidth: 345 }}
			className='card__product'
			component={Link}
			to={ROUTER_CONSTANT.HOME}
		>
			<CardActionArea>
				<CardMedia
					component='img'
					height='140'
					image={prod1}
					alt='green iguana'
					className='img__card'
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant='h5'
						component='div'
						className='card__name'
					>
						MO231 - Pomeranian White
					</Typography>
					<Typography
						gutterBottom
						variant='h5'
						component='div'
						className='card__desc'
					>
						<ul className='card__desc__detail'>
							<li>
								<span>Gene:</span>
								<span className='detail'>Male</span>
							</li>
							<li>
								<span>Age:</span>
								<span className='detail'>02 months</span>
							</li>
						</ul>
					</Typography>
					<Typography
						variant='body2'
						color='text.secondary'
						className='card__price'
					>
						6.900.000 VND
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}
