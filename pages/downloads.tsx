import {
	createTheme,
	CssBaseline,
	ThemeProvider,
	Typography,
} from '@mui/material'
import Head from 'next/head'
import { DownloadButtons } from '../lib/components/downloadPage/DownloadButtons'
import { Header } from '../lib/components/Header'
// import '../styles/Home.module.css'
const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
})

export default function Downloads() {
	return (
		<div>
			<Head>
				<title>Downloads | Venomhack420</title>
				<meta
					name='title'
					content='Venomhack420 Official Downloads by Venomforce'
				/>
				<meta
					name='description'
					content='Venomhack420 downloads page.'
				/>
				<meta property='og:site_name' content='Venomhack420' />
				<meta property='og:type' content='website' />
				<meta
					property='og:image'
					content='https://venomhack.com/assets/venomfors.jpg'
				/>
				<meta
					property='og:title'
					content='Venomhack420 Official Downloads by Venomforce'
				/>
				<meta property='og:url' content='https://venomhack.com' />
				<meta
					property='og:description'
					content='Venomhack420 downloads page.'
				/>
				<meta name='twitter:card' content='summary_large_image' />
				<link rel='icon' href='/vficon.ico' />
			</Head>

			<main
				style={{
					backgroundImage: '/assets/vficon.png',
					backgroundSize: 'cover',
				}}
			>
				<Header />
				<Typography variant='h4' textAlign='center' sx={{ pb: 4 }}>
					Downloads
				</Typography>
				<DownloadButtons />
			</main>
		</div>
	)
}
