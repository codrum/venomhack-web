import { Wat2DoFonts } from './fonts'

export type Wat2DoTheme = typeof Wat2DoTheme
export const Wat2DoTheme = {
	baseFontSize: 16,
	fonts: Wat2DoFonts,
	breakpoints: {
		sm: 0,
		lg: 600,
	},
	colors: {
		black: '#000000',
		white: '#FFFFFF',
		darkGray: '#131313',
		gray: '#767676',
		lightGray: '#272727',
		lighterGray: '#1E1E1E',
		yellow: '#FFD700',
		green: '#85BB65',
		purple: '#540F89',
	},
}

declare module 'styled-components' {
	interface DefaultTheme extends Wat2DoTheme {}
}
