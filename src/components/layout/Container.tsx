import { rem } from '@/theme/helpers'
import styled from 'styled-components'

export const Container = styled.div`
	// overflow-x: wrap;
	// @media only screen and (max-width: 600px) {
	// 	padding: 0;
	// }
	@media only screen and (min-width: 768px) {
		padding: 0 ${rem(32)};
	}
`
