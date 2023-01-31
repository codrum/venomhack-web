import '../styles/fonts.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FunctionComponent } from 'react'
import { Wat2DoThemeProvider } from '../theme/VenomhackThemeProvider'
import Script from 'next/script'

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
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
			<Wat2DoThemeProvider>
				<Component {...pageProps} />
			</Wat2DoThemeProvider>
		</>
	)
}

export default MyApp
