import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import { DonateButton } from '../lib/components/DonateButton'
import { Header } from '../lib/components/Header'
// import '../styles/globals.css'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Venomhack420</title>
				<meta
					name='description'
					content='Venomhack420 was pioneered by tyrannus00 with help from several others over the years. 
					It is known as the most OP Minecraft 1.19 client, and everyone who uses Venomhack is a god.'
				/>
				<meta name='og:site_name' content='Venomhack420' />
				<meta name='og:type' content='object' />
				<meta
					name='og:image'
					content='https://venomhack.com/assets/venomfors.jpg'
				/>
				<meta
					name='og:title'
					content='Venomhack420 Official Release by Venomforce'
				/>
				<meta name='og:url' content='https://venomhack.com' />
				<meta
					name='og:description'
					content='Venomhack420 was pioneered by tyrannus00 with help from several others over the years. 
					It is known as the most OP Minecraft 1.19 client, and everyone who uses Venomhack is a god.'
				/>

				<meta name='theme-color' content='#000000' />
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
								Venomhack420 has been leaked and made public.
								Please, do not trust third party sources. We
								know that our client is highly sought after, so
								only download it from us, the creators.
							</Typography>
							<DonateButton />
							<Typography variant='body1' textAlign='left'>
								We have been working hard to stay on top of the
								game and have been developing Venomhack for
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
