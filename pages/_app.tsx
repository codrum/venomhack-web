import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import Head from 'next/head'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name='robots' content='all' />
				{/* <!-- Google / Search Engine Tags --> */}
				<meta
					itemProp='name'
					content='Venomhack420 | Official Release by Venomforce'
				/>
				<meta
					itemProp='description'
					content='Venomhack420 was pioneered by tyrannus00 with help from several others over the years.
					 It is known as the most OP Minecraft 1.19 client, and everyone who uses Venomhack is a god.'
				/>
				<meta
					itemProp='image'
					content='http://venomhack.com/assets/venomfors.jpg'
				/>
			</Head>
			<Script
				id='get-ga'
				strategy='lazyOnload'
				src={`https://www.googletagmanager.com/gtag/js?id=G-S1B2VQGHS1`}
			/>

			<Script id='config' strategy='lazyOnload'>
				{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-S1B2VQGHS1', {
			page_path: window.location.pathname,
        });
		`}
			</Script>
			<Script
				async
				src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5016075289889293'
				crossOrigin='anonymous'
			></Script>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}
