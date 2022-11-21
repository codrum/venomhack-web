import { Chat } from '../lib/components/featurePage/Chat'
import { Container, Typography } from '@mui/material'
import Head from 'next/head'
import { Header } from '../lib/components/Header'
import { Combat } from '../lib/components/featurePage/Combat'
import { Exploits } from '../lib/components/featurePage/Exploits'
import { Misc } from '../lib/components/featurePage/Misc'
import { Movement } from '../lib/components/featurePage/Movement'
import { Render } from '../lib/components/featurePage/Render'
// import styles from '../styles/Home.module.css'

export default function Features() {
	return (
		<div>
			<Head>
				<title>Features: VenomHack</title>
				<meta name='description' content='VenomHack features' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<Header />
				<Typography variant='h3' gutterBottom textAlign='center'>
					VenomHack420 Features
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
