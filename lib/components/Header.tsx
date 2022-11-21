import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import React, { FC } from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import { IconButton } from '@mui/material'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Image from 'next/image'
import Link from 'next/link'
import { pages } from '../../data/pages'
import { HeaderDrawer } from './HeaderDrawer'

export const drawerWidth = 240

export const Header: FC<{}> = (props) => {
	const [mobileOpen, setMobileOpen] = React.useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}
	return (
		<>
			<AppBar position='static' sx={{ backgroundColor: 'black' }}>
				<Container maxWidth='xl'>
					<Toolbar disableGutters>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='start'
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { sm: 'none' } }}
						>
							<MenuIcon />
						</IconButton>
						<Box
							sx={{
								float: { xs: 'right', md: 'left' },
							}}
						>
							<Link href='/'>
								<Image
									src='/assets/vficon.png'
									width={72}
									height={72}
									alt='vflogo'
								/>
							</Link>
						</Box>

						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'none', md: 'flex' },
							}}
						>
							{pages.map((page) => (
								<Link href={page.url} key={page.title}>
									<Button
										sx={{
											my: 2,
											color: 'white',
											display: 'block',
										}}
									>
										{page.title}
									</Button>
								</Link>
							))}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<HeaderDrawer
				mobileOpen={mobileOpen}
				handleDrawerToggle={handleDrawerToggle}
			/>
		</>
	)
}
