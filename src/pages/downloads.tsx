import { Backdrop } from '@/components/Backdrop'
import { DownloadsHead } from '@/components/head'
import { Header } from '@/components/Header'
import { Container } from '@/components/layout/Container'
import { TextWithImage } from '@/components/TextWithImage'
import { Typography } from '@/components/typography'
import { rem } from '@/theme/helpers'
import Head from 'next/head'
import { useState } from 'react'
import styled from 'styled-components'
export const A = styled.a`
	display: block;
	padding-bottom: ${rem(64)};
	cursor: pointer;
`
export const BodyContainer = styled(Container)`
	margin-top: ${rem(128)};
`
const DownloadsHeading = styled(Typography.Heading.Default)`
	text-indent: 32px;
	@media only screen and (max-width: 768px) {
		font-size: 3rem;
	}
`
const FeatureHeaderContainer = styled.div`
	text-align: center;
`
export const ImageContainer = styled.div`
	position: relative;
	width: 21px;
	height: 32px;
	margin-right: 8px;
`
export const FlexTextContainer = styled.div`
	justify-content: center;
	display: flex;
`
export default function DownloadsPage() {
	const [drawerOpen, setDrawerOpen] = useState(false)
	const handleOpenDrawer = () => {
		setDrawerOpen(true)
	}
	const handleCloseDrawer = () => {
		setDrawerOpen(false)
	}
	const backDrop = drawerOpen && <Backdrop closeDrawer={handleCloseDrawer} />
	return (
		<>
			<DownloadsHead />
			{backDrop}
			<main>
				<Container>
					<Header
						handleOpenDrawer={handleOpenDrawer}
						drawerOpen={drawerOpen}
					/>
					<FeatureHeaderContainer>
						<DownloadsHeading>Downloads</DownloadsHeading>
					</FeatureHeaderContainer>
					<BodyContainer>
						<A href='https://direct-link.net/542726/venomhack420-newbase'>
							<TextWithImage text={'Newbase'} />
						</A>

						<A href='https://direct-link.net/542726/venomhack420-273-meteor'>
							<TextWithImage text={'Meteor Addon'} />
						</A>
					</BodyContainer>
				</Container>
			</main>
		</>
	)
}
