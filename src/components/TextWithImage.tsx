import styled from 'styled-components'
import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import { Typography } from './typography'

const ImageContainer = styled.div`
	position: relative;
	width: 21px;
	height: 32px;
	margin-right: 8px;
`
const FlexTextContainer = styled.div<{ left?: boolean }>`
	justify-content: ${(props) => (props.left ? 'start' : 'center')};
	display: flex;
`

export const TextWithImage: FunctionComponent<{
	text: string
	alignLeft?: boolean
}> = ({ text, alignLeft }) => {
	return (
		<FlexTextContainer left={alignLeft}>
			<ImageContainer>
				<Image
					src='/assets/vficonlarge.png'
					alt='venomforce logo'
					fill
				/>
			</ImageContainer>
			<Typography.Heading.Small>{text}</Typography.Heading.Small>
		</FlexTextContainer>
	)
}
