import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import { DonateButton } from '../lib/components/DonateButton'
import { Header } from '../lib/components/Header'
// import '../styles/globals.css'

export default function Home() {
	return (
		<div>
			<Head>
				<title>
					VenomHack: A Meteor addon and Standalone Mod Menu by
					Venomforce
				</title>
				<meta
					name='description'
					content='Venomhack420 was pioneered by tyrannus00 with help from several others over the years. 
					It is known as the most OP Minecraft hacked client, and everyone who uses Venomhack is a god.'
				/>
				<meta name='og:site_name' content='Venomhack420' />
				<meta name='og:type' content='object' />
				<meta name='og:image' content='/assets/venomfors.jpg' />
				<meta name='og:title' content='Home' />
				<meta name='og:url' content='https://venomhack.com' />
				<meta
					name='og:description'
					content='The website for Meteor Client.'
				/>
				<link rel='icon' href='/vficon.ico' />
			</Head>
			<main>
				<Header />
				<Container>
					<Grid container justifyContent='center'>
						<Grid item xs={12}>
							<Typography
								variant='h4'
								textAlign='center'
								gutterBottom
							>
								Venomhack420
							</Typography>
						</Grid>
						<Grid item xs={12} md={8}>
							<Typography variant='body1' textAlign='left'>
								Unfortunately the time has come where
								VenomHack420 has been leaked and made public.
								Please, do not trust third party sources. We
								know that our client is highly sought after, so
								only download it from us, the creators.
							</Typography>
							<DonateButton />
							<Typography variant='body1' textAlign='left'>
								We have been working hard to stay on top of the
								game and have been developing VenomHack for
								years. If you enjoy our client, please feel free
								to buy a coffee for the creators.
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</main>
		</div>
	)
}
