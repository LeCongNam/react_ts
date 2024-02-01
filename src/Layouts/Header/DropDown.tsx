import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import vietnam  from '../../assets/vietnam.svg'

const options = [
	{title: "Viet Nam", icon: vietnam},
	{title: "Viet Nam", icon: vietnam},
];

export default function SimpleListMenu() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [selectedIndex, setSelectedIndex] = React.useState(1);
	const open = Boolean(anchorEl);
	const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuItemClick = (
		event: React.MouseEvent<HTMLElement>,
		index: number,
	) => {
		setSelectedIndex(index);
		setAnchorEl(null);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<List
				component="nav"
				aria-label="Device settings"
				sx={{ bgcolor: 'background.paper' }}
			>
				<ListItemButton
					id="lock-button"
					aria-haspopup="listbox"
					aria-controls="lock-menu"
					aria-label="Viet Nam"
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClickListItem}
				>
					<ListItemText
						primary="Viet Nam"
						secondary={options[selectedIndex].title}
					/>
				</ListItemButton>
			</List>
			<Menu
				id="lock-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'lock-button',
					role: 'listbox',
				}}
			>
				{options.map((option, index) => (
					<MenuItem
						key={option.title}
						disabled={index === 0}
						selected={index === selectedIndex}
						onClick={(event) => handleMenuItemClick(event, index)}
					>
						{option.title}
					</MenuItem>
				))}
			</Menu>
		</div>
	);
}
