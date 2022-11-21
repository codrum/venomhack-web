import Box from '@mui/material/Box'
import React, { FC } from 'react'
import {
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Typography,
} from '@mui/material'
import { drawerWidth } from './Header'
import { pages } from '../../data/pages'
import Link from 'next/link'

type HeaderDrawerProps = {
	container: (() => any) | undefined
	mobileOpen: boolean
	handleDrawerToggle: () => void
}

export const HeaderDrawer: FC<HeaderDrawerProps> = ({
	container,
	mobileOpen,
	handleDrawerToggle,
}) => {
	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant='h6' sx={{ my: 2 }}>
				VenomHack
			</Typography>
			<Divider />
			<List>
				{pages.map((page) => (
					<ListItem key={page.title} disablePadding>
						<Link href={page.url}>
							<ListItemButton sx={{ textAlign: 'center' }}>
								<ListItemText primary={page.title} />
							</ListItemButton>
						</Link>
					</ListItem>
				))}
			</List>
		</Box>
	)
	return (
		<Box component='nav'>
			<Drawer
				container={container}
				variant='temporary'
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
				sx={{
					display: { xs: 'block', md: 'none' },
					'& .MuiDrawer-paper': {
						boxSizing: 'border-box',
						width: drawerWidth,
					},
				}}
			>
				{drawer}
			</Drawer>
		</Box>
	)
}
