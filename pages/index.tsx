import { Box, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Script from 'next/script'
import { DonateButton } from '../lib/components/DonateButton'
// import YouTube, { YouTubeEvent } from 'react-youtube'
import { Header } from '../lib/components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
	// const opts = {
	// 	height: '100%',
	// 	width: '100%',
	// 	playerVars: {
	// 		autoplay: 0,
	// 	},
	// }
	// const onReady = (event: YouTubeEvent<any>) => {
	// 	event.target.pauseVideo()
	// }
	return (
		<div>
			<Head>
				<title>VenomHack: A Meteor addon by VenomForce</title>
				<meta
					name='description'
					content='The best CrystalPvP Addon available.'
				/>
				<link rel='icon' href='/vficon.ico' />
			</Head>
			<main>
				<Header />
				<Typography variant='h2' textAlign='center' gutterBottom>
					VenomHack420
				</Typography>
				<Grid container justifyContent='center'>
					<Grid item xs={12} md={6}>
						<Typography variant='body1' textAlign='center'>
							Unfortunately the time has come where VenomHack420
							has been leaked and made public. Please, do not
							trust third party sources. We know that our client
							is highly sought after, so only download it from us,
							the creators.
						</Typography>
						<DonateButton />
						<Typography variant='body1' textAlign='center'>
							We have been working hard to stay on top of the game
							and have been developing VenomHack for years. If you
							enjoy our client, please feel free to buy a coffee
							for the creators.
						</Typography>
					</Grid>
				</Grid>
			</main>
		</div>
	)
}
