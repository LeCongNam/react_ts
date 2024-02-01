import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React from 'react'
import { NavLink } from 'react-router-dom'

// dialog
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

function Header() {
	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleClickBackDrop = (_event: object, reason: string) => {
		if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
			setOpen(false)
		}
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					{/* Logo */}
					<Typography
						variant='h6'
						component='div'
						sx={{ flexGrow: 1 }}
					>
						<NavLink to='/'>MY SHOP</NavLink>
					</Typography>
					<Button color='inherit'>Todos</Button>
					<Button color='inherit'>Login</Button>
					<Button
						color='inherit'
						onClick={handleClickOpen}
					>
						Register
					</Button>
				</Toolbar>

				{/* Dialog */}
				<Dialog
					open={open}
					onClose={handleClickBackDrop}
					disableEscapeKeyDown
					PaperProps={{
						component: 'form',
						onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
							event.preventDefault()
							const formData = new FormData(event.currentTarget)
							const formJson = Object.fromEntries((formData as any).entries())
							const email = formJson.email
							console.log(email)
							handleClose()
						},
					}}
				>
					<DialogTitle>Subscribe</DialogTitle>
					<DialogContent>
						<DialogContentText>
							To subscribe to this website, please enter your email address here. We will send updates occasionally.
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Cancel</Button>
					</DialogActions>
				</Dialog>
			</AppBar>
		</Box>
	)
}

export default Header
