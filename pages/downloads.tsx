import { Typography } from '@mui/material'
import Head from 'next/head'
import { DownloadButtons } from '../lib/components/downloadPage/DownloadButtons'
import { Header } from '../lib/components/Header'
// import '../styles/Home.module.css'

export default function Downloads() {
	return (
		<div>
			<Head>
				<title>Downloads: Venomhack420</title>
				<meta name='description' content='Venomhack public downloads' />
				<link rel='icon' href='/vficon.ico' />
			</Head>

			<main
				style={{
					backgroundImage: '/assets/vficon.png',
					backgroundSize: 'cover',
				}}
			>
				<Header />
				<Typography variant='h3' textAlign='center' sx={{ pb: 4 }}>
					Downloads
				</Typography>
				<DownloadButtons />
			</main>
		</div>
	)
}
