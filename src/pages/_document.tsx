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
				<noscript
					dangerouslySetInnerHTML={{
						__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TF72X3K"
						height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
					}}
				/>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
