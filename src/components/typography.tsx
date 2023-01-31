import styled from 'styled-components'
import { color, font, rem } from '../theme/helpers'

const Body = styled.p`
	${font('buda', 'light', 'normal')}
	font-size: ${rem(36)};
	letter-spacing: 0.105em;
	line-height: 100%;
	font-weight: 300;
	margin: 0;
`
const BodySmall = styled(Body)`
	font-size: ${rem(24)};
	line-height: 150%;
`

const Heading = styled.h1`
	${font('venomhack', 'regular', 'normal')}
	font-size: ${rem(96)};
	line-height: 100%;
	letter-spacing: 0.43em;
	margin: ${rem(0, 0, 16)};
	:last-child {
		margin-bottom: 0;
	}
	text-align: center;
	cursor: default;
	text-align: center;
	display: inline-block;
`
const SubHeading = styled(Body)`
	text-align: center;
`

const HeadingButton = styled(Heading)`
	font-size: ${rem(48)};
`

export const Typography = {
	Body: {
		Default: Body,
		Small: BodySmall,
	},
	Heading: {
		Default: Heading,
		Small: SubHeading,
		Button: HeadingButton,
	},
}
