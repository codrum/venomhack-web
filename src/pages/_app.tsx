import '../styles/fonts.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FunctionComponent, useEffect } from 'react'
import { Wat2DoThemeProvider } from '../theme/VenomhackThemeProvider'
import Script from 'next/script'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
	gtmId: 'GTM-TF72X3K',
}
const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
	useEffect(() => {
		TagManager.initialize(tagManagerArgs)
	}, [])
	return (
		<>
			<Script
				src='https://www.googletagmanager.com/gtag/js?id=G-S1B2VQGHS1'
				strategy='afterInteractive'
			/>
			<Script id='google-analytics' strategy='afterInteractive'>
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-S1B2VQGHS1');
        `}
			</Script>

			<Wat2DoThemeProvider>
				<Component {...pageProps} />
			</Wat2DoThemeProvider>
		</>
	)
}

export default MyApp
