import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import React, { FC } from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import { Grid, IconButton } from '@mui/material'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Image from 'next/image'
import Link from 'next/link'
import { pages } from '../../data/pages'
import { HeaderDrawer } from './HeaderDrawer'

export const Header: FC<{}> = () => {
	const [mobileOpen, setMobileOpen] = React.useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}
	return (
		<Grid container sx={{}}>
			<AppBar
				position='static'
				component='nav'
				sx={{
					backgroundColor: 'black',
					// pb: 4,
				}}
			>
				<Toolbar disableGutters>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ ml: 2, display: { md: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Box
						sx={{
							flexGrow: 1,
							textAlign: { xs: 'right', md: 'left' },
							pt: 2,
							visibility: mobileOpen ? 'hidden' : 'visible',
							// display: { xs: 'none', md: 'flex' },
						}}
					>
						<Link href='/'>
							<Image
								src='/assets/vficon.png'
								width={100}
								height={100}
								alt='vflogo'
							/>
						</Link>
					</Box>

					<Box
						sx={{
							display: { xs: 'none', md: 'flex' },
							justifyContent: 'flex-end',
							pr: 8,
						}}
					>
						{pages.map((page) => (
							<Link
								href={page.url}
								key={page.title}
								style={{ textDecoration: 'none' }}
							>
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
			</AppBar>
			<HeaderDrawer
				mobileOpen={mobileOpen}
				handleDrawerToggle={handleDrawerToggle}
			/>
		</Grid>
	)
}
