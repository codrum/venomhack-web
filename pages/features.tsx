import { Chat } from '../lib/components/featurePage/Chat'
import { Container, Typography } from '@mui/material'
import Head from 'next/head'
import { Header } from '../lib/components/Header'
import { Combat } from '../lib/components/featurePage/Combat'
import { Exploits } from '../lib/components/featurePage/Exploits'
import { Misc } from '../lib/components/featurePage/Misc'
import { Movement } from '../lib/components/featurePage/Movement'
import { Render } from '../lib/components/featurePage/Render'
// import '../styles/globals.css'

export default function Features() {
	return (
		<div>
			<Head>
				<title>Features | Venomhack420</title>
				{/* <meta
					name='description'
					content='Venomhack420 has over 70 unique mods in the Newbase version. Venomhack420 is most known 
					for its next-generation Crystal Aura, which allows the player to dominate opponents in CPvP.'
				/> */}
				<meta property='og:site_name' content='Venomhack420' />
				<meta property='og:type' content='article' />
				<meta
					property='og:image'
					content='https://venomhack.com/assets/venomfors.jpg'
				/>
				<meta
					property='og:title'
					content='Venomhack420 Official Features by Venomforce'
				/>
				<meta property='og:url' content='https://venomhack.com' />
				<meta
					property='og:description'
					content='Venomhack420 has over 70 unique mods in the Newbase version. Venomhack420 is most known 
					for its next-generation Crystal Aura, which allows the player to dominate opponents in CPvP.'
				/>
				<meta name='twitter:card' content='summary_large_image' />

				<link rel='icon' href='/vficon.ico' />
			</Head>
			<main>
				<Header />
				<Typography variant='h4' gutterBottom textAlign='center'>
					Features
				</Typography>
				<Container>
					<Chat />
					<Combat />
					<Exploits />
					<Misc />
					<Movement />
					<Render />
				</Container>
			</main>
		</div>
	)
}
