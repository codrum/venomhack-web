import { Typography } from '@mui/material'
import Head from 'next/head'
import { Header } from '../lib/components/Header'
import '../styles/Home.module.css'

export default function Downloads() {
	return (
		<div>
			<Head>
				<title>Downloads: Venomhack</title>
				<meta name='description' content='Venomhack public downloads' />
				<link rel='icon' href='/vficon.ico' />
			</Head>

			<main>
				<Header />
				<Typography variant='h3' textAlign='center'>
					Downloads
				</Typography>
			</main>
		</div>
	)
}
