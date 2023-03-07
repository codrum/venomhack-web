import Head from 'next/head'
import { FunctionComponent } from 'react'
import { createGlobalStyle } from 'styled-components'
import { color, font, up } from '../theme/helpers'

export const FontFamilies: FunctionComponent = () => (
	<Head>
		<link rel='preconnect' href='https://fonts.googleapis.com' />
		<link
			rel='preconnect'
			href='https://fonts.gstatic.com'
			crossOrigin='anonymous'
		/>
		<link
			href='https://fonts.googleapis.com/css2?family=Buda:wght@300&display=swap'
			rel='stylesheet'
		></link>
		{/* <style data-href='https://fonts.googleapis.com/css2?family=Buda:wght@300&display=swap'>
			@font-face{font-family:'Buda';font-style:normal;font-weight:300;src:url(https://fonts.gstatic.com/s/buda/v25/GFDqWAN8mnyIJSSrK7ILrphaOAw.woff2) format('woff2');}
		</style> */}
		{/* https://fonts.gstatic.com/s/buda/v25/GFDqWAN8mnyIJSSrK7ILrphaOAw.woff2 */}
	</Head>
)

export const HomeHead: FunctionComponent = () => (
	<Head>
		<title>Home | Venomhack420</title>
		<meta
			name='title'
			content='Venomhack420 Official Release by Venomforce'
		></meta>
		<meta
			name='description'
			content='Venomhack420 is available as a Meteor Client addon or as a standalone client. It was pioneered by tyrannus00 and other members of Venomforce and everyone who uses Venomhack is a god at pvp.'
		/>
		<meta property='og:site_name' content='Venomhack420' />
		<meta property='og:type' content='website' />
		<meta
			property='og:image'
			content='https://venomhack.com/assets/vficonlarge.png'
		/>
		<meta
			property='og:title'
			content='Venomhack420 Official Release by Venomforce'
		/>
		<meta property='og:url' content='https://venomhack.com' />
		<meta
			property='og:description'
			content='Venomhack420 is available as a Meteor Client addon or as a standalone client. It was pioneered by tyrannus00 and other members of Venomforce and everyone who uses Venomhack is a god at pvp.'
		/>
		<meta name='twitter:card' content='summary_large_image' />

		<meta name='theme-color' content='#000000' />
	</Head>
)

export const FeaturesHead: FunctionComponent = () => (
	<Head>
		<title>Features | Venomhack420</title>
		<meta
			name='title'
			content='Venomhack420 Official Features by Venomforce'
		/>
		<meta
			name='description'
			content='Venomhack420 has over 70 unique mods in the Newbase version. Venomhack420 is most known 
		for its next-generation Crystal Aura, which allows the player to dominate opponents in CPvP.'
		/>
		<meta property='og:site_name' content='Venomhack420' />
		<meta property='og:type' content='website' />
		<meta
			property='og:image'
			content='https://venomhack.com/assets/vficonlarge.png'
		/>
		<meta
			property='og:title'
			content='Venomhack420 Official Features by Venomforce'
		/>
		<meta property='og:url' content='https://venomhack.com' />
		<meta
			property='og:description'
			content='Venomhack420 has over 70 unique mods in the Newbase version. Venomhack420 is most known 
		for its next-generation Crystal Aura, which allows the player to dominate opponents in CPvP.'
		/>
		<meta name='twitter:card' content='summary_large_image' />
	</Head>
)

export const DownloadsHead: FunctionComponent = () => (
	<Head>
		<title>Downloads | Venomhack420</title>
		<meta
			name='title'
			content='Venomhack420 Official Downloads by Venomforce'
		/>
		<meta name='description' content='Venomhack420 downloads page.' />
		<meta property='og:site_name' content='Venomhack420' />
		<meta property='og:type' content='website' />
		<meta
			property='og:image'
			content='https://venomhack.com/assets/vficonlarge.png'
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
	</Head>
)

export const ShowcaseHead: FunctionComponent = () => (
	<Head>
		<title>Showcase | Venomhack420</title>
		<meta name='title' content='Venomhack420 Official Mod Showcase' />
		<meta
			name='description'
			content="Venomhack420 mod showcase page. Maybe one day you'll have a cool enough Venomhack montage to be on our official site."
		/>
		<meta property='og:site_name' content='Venomhack420' />
		<meta property='og:type' content='website' />
		<meta
			property='og:image'
			content='https://venomhack.com/assets/vficonlarge.png'
		/>
		<meta
			property='og:title'
			content='Venomhack420 Official Mod Showcase'
		/>
		<meta property='og:url' content='https://venomhack.com' />
		<meta
			property='og:description'
			content="Venomhack420 mod showcase page. Maybe one day you'll have a cool enough Venomhack montage to be on our official site."
		/>
		<meta name='twitter:card' content='summary_large_image' />
	</Head>
)
