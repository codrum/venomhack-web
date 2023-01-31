import { FunctionComponent, PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'
import { Wat2DoTheme } from './theme'

export const Wat2DoThemeProvider: FunctionComponent<
	PropsWithChildren<unknown>
> = ({ children }) => (
	<ThemeProvider theme={Wat2DoTheme}>{children}</ThemeProvider>
)
