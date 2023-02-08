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

			<Script id='google-tag-manager'>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TF72X3K');`}</Script>
			<Wat2DoThemeProvider>
				<Component {...pageProps} />
			</Wat2DoThemeProvider>
		</>
	)
}

export default MyApp
