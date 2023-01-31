export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
export type FontStyle = 'normal' | 'italic'

export type Wat2DoFonts = typeof Wat2DoFonts
export const Wat2DoFonts = {
	buda: {
		family: 'Buda, cursive',
		variants: {
			light: 300,
		},
	},
	venomhack: {
		family: 'VENOM, sans-serif',
		variants: {
			regular: 400,
		},
	},
} as const

export type Wat2DoFont = keyof Wat2DoFonts
export type Wat2DoFontWeight<T extends Wat2DoFont> =
	keyof Wat2DoFonts[T]['variants']
