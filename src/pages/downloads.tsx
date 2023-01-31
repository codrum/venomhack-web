import { Backdrop } from '@/components/Backdrop'
import { Header } from '@/components/Header'
import { Container } from '@/components/layout/Container'
import { TextWithImage } from '@/components/TextWithImage'
import { Typography } from '@/components/typography'
import { rem } from '@/theme/helpers'
import Head from 'next/head'
import { useState } from 'react'
import styled from 'styled-components'
const A = styled.a`
	display: block;
	padding-bottom: ${rem(64)};
	cursor: pointer;
`
const BodyContainer = styled(Container)`
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
			<Head>
				<title>Downloads | Venomhack420</title>
				<meta
					name='title'
					content='Venomhack420 Official Downloads by Venomforce'
				/>
				<meta
					name='description'
					content='Venomhack420 downloads page.'
				/>
				<meta property='og:site_name' content='Venomhack420' />
				<meta property='og:type' content='website' />
				<meta
					property='og:image'
					content='https://venomhack.com/assets/venomfors.jpg'
				/>
				<meta
					property='og:title'
					content='Venomhack420 Official Downloads by Venomforce'
				/>
				<meta property='og:url' content='https://venomhack.com' />
				<meta
					property='og:description'
					content='Venomhack420 downloads page.'
				/>
				<meta name='twitter:card' content='summary_large_image' />
			</Head>
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
