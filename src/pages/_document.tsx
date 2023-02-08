import { FontFamilies } from '@/components/head'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<FontFamilies />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}