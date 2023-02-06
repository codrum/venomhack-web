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
const FlexTextContainer = styled.div<{ left?: boolean; border?: boolean }>`
	justify-content: ${(props) => (props.left ? 'start' : 'center')};
	display: flex;
	border: ${(props) => (props.border ? '1px solid white' : 'none')};
`

export const TextWithImage: FunctionComponent<{
	text: string
	alignLeft?: boolean
	border?: boolean
}> = ({ text, alignLeft, border }) => {
	return (
		<FlexTextContainer left={alignLeft} border={border}>
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
