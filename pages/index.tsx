import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Script from 'next/script'
import { DonateButton } from '../lib/components/DonateButton'
import { Header } from '../lib/components/Header'
import '../styles/Home.module.css'

export default function Home() {
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
				<Container>
					<Grid container justifyContent='center'>
						<Grid item xs={12}>
							<Typography
								variant='h3'
								textAlign='center'
								gutterBottom
							>
								VenomHack420
							</Typography>
						</Grid>
						<Grid item xs={12} md={6}>
							<Typography variant='body1' textAlign='center'>
								Unfortunately the time has come where
								VenomHack420 has been leaked and made public.
								Please, do not trust third party sources. We
								know that our client is highly sought after, so
								only download it from us, the creators.
							</Typography>
							<DonateButton />
							<Typography variant='body1' textAlign='center'>
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
