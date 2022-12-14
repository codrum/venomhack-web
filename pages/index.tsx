import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import { DonateButton } from '../lib/components/DonateButton'
import { Header } from '../lib/components/Header'
// import '../styles/globals.css'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Home | Venomhack420</title>
				<meta
					name='title'
					content='Venomhack420 Official Release by Venomforce'
				></meta>
				<meta
					name='description'
					content='Venomhack420 is available as a Meteor Client addon or as a standalone client. It was pioneered by tyrannus00 and other members of Venomforce and everyone who uses Venomhack is a god at pvp.'
				/>
				<meta property='og:site_name' content='Venomhack420' />
				<meta property='og:type' content='website' />
				<meta
					property='og:image'
					content='https://venomhack.com/assets/venomfors.jpg'
				/>
				<meta
					property='og:title'
					content='Venomhack420 Official Release by Venomforce'
				/>
				<meta property='og:url' content='https://venomhack.com' />
				<meta
					property='og:description'
					content='Venomhack420 is available as a Meteor Client addon or as a standalone client. It was pioneered by tyrannus00 and other members of Venomforce and everyone who uses Venomhack is a god at pvp.'
				/>
				<meta name='twitter:card' content='summary_large_image' />

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
							<Typography variant='body1' textAlign='center'>
								Venomhack420 is the formerly private 1.19 client
								created by the members of Venomforce.
							</Typography>
							<DonateButton />
							<Typography variant='body1' textAlign='center'>
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
