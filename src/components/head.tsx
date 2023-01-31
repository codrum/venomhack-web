import { FunctionComponent } from 'react'
import { createGlobalStyle } from 'styled-components'
import { color, font, up } from '../theme/helpers'

export const FontFamilies: FunctionComponent = () => (
	<>
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
	</>
)
