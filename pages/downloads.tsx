import { Typography } from '@mui/material'
import Head from 'next/head'
import { DownloadButtons } from '../lib/components/downloadPage/DownloadButtons'
import { Header } from '../lib/components/Header'
// import '../styles/Home.module.css'

export default function Downloads() {
	return (
		<div>
			<Head>
				<title>Features: Venomhack</title>
				<meta
					name='description'
					content='Venomhack420 was unfortunately leaked, so we are officially releasing the most up to date version of Venomhack420. Enjoy, lads.'
				/>
				<meta name='og:site_name' content='Venomhack420 Downloads' />
				<meta name='og:type' content='object' />
				<meta
					name='og:image'
					content='https://venomhack.com/assets/venomfors.jpg'
				/>
				<meta
					name='og:title'
					content='Venomhack420 Official Downloads by Venomforce'
				/>
				<meta name='og:url' content='https://venomhack.com' />
				<meta
					name='og:description'
					content='Venomhack420 was unfortunately leaked, so we are officially releasing the most up to date version of Venomhack420. Enjoy, lads.'
				/>
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
