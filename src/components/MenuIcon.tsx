import { color, rem } from '@/theme/helpers'
import styled from 'styled-components'

const IconBase = styled.svg.attrs({
	xmlns: 'http://www.w3.org/2000/svg',
	viewBox: '0 0 24 24',
})`
	display: inline-block;
	vertical-align: middle;
	line-height: inherit;
	width: ${rem(36)};
`
const IconPath = styled.path`
	fill: ${color('white')};
`
const MenuIconPath = styled(IconPath).attrs({
	d: 'm13 16.745c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75zm9-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm-4-5c0-.414-.336-.75-.75-.75h-14.5c-.414 0-.75.336-.75.75s.336.75.75.75h14.5c.414 0 .75-.336.75-.75z',
	fillRule: 'nonzero',
})``

export const MenuIcon = () => (
	<IconBase>
		<MenuIconPath />
	</IconBase>
)
