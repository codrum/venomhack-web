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
import { pages } from '../../data/pages'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles'

type HeaderDrawerProps = {
	mobileOpen: boolean
	handleDrawerToggle: () => void
}
export const HeaderDrawer: FC<HeaderDrawerProps> = ({
	mobileOpen,
	handleDrawerToggle,
}) => {
	const theme = useTheme()
	const drawerWidth = 240
	if (theme.palette.mode === 'dark') {
	}
	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Link href='/'>
				{theme.palette.mode === 'dark' ? (
					<Image
						src='/assets/vficon.png'
						width={100}
						height={100}
						alt='vflogo'
					/>
				) : (
					<Image
						src='/vficon.ico'
						width={100}
						height={100}
						alt='vflogo'
					/>
				)}

				{/* <Typography variant='h6' sx={{ my: 2 }}>
					Venomhack420
				</Typography> */}
			</Link>
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
