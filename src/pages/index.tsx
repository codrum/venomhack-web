import { Backdrop } from '@/components/Backdrop'
import { HomeHead } from '@/components/head'
import { Header } from '@/components/Header'
import { Container } from '@/components/layout/Container'
import { TextWithImage } from '@/components/TextWithImage'
import { Typography } from '@/components/typography'
import YouTubeFrame from '@/components/YoutubeFrame'
import { rem } from '@/theme/helpers'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import { A, BodyContainer } from './downloads'

const ImageContainer = styled.div`
	position: relative;
	width: 260px;
	height: 400px;
	margin: auto;
	margin-bottom: ${rem(32)};
`
const Main = styled.main`
	overflow-y: hidden;
	overflow-x: hidden;
`
export const HeadingContainer = styled.div`
	max-width: 100%;
	text-align: center;
`
const Heading = styled(Typography.Heading.Default)`
	text-indent: 32px;
	@media only screen and (max-width: 768px) {
		text-indent: 36px;
		font-size: 5rem;
	}
	@media only screen and (max-width: 600px) {
		text-indent: 24px;
		font-size: 4rem;
	}
`
const Heading2 = styled(Typography.Heading.Default)`
	@media only screen and (max-width: 768px) {
		text-indent: 36px;
		font-size: 5rem;
	}
	@media only screen and (max-width: 600px) {
		text-indent: 24px;
		font-size: 4rem;
	}
`
const IndexBodyContainer = styled(BodyContainer)`
	text-align: left;
`
const SubHeadingText = styled(Typography.Heading.Small)`
	padding-bottom: ${rem(24)};
`

export default function Home() {
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
				<HomeHead />
			</Head>
			{backDrop}
			<Main>
				<Container>
					<Header
						handleOpenDrawer={handleOpenDrawer}
						drawerOpen={drawerOpen}
					/>
					<HeadingContainer>
						<Heading>Venom</Heading>
						<Heading2>hack</Heading2>
					</HeadingContainer>
					<ImageContainer>
						<Image
							src='/assets/vficonlarge.png'
							alt='venomforce logo'
							fill
						/>
					</ImageContainer>
					<SubHeadingText>Venomhack420 is here.</SubHeadingText>
					{/* <SubHeadingText>Join Venomforce today.</SubHeadingText>

					<A href='https://discord.gg/venomforce'>
						<TextWithImage
							text={'Discord (Not for support)'}
							border
						/>
					</A> */}
				</Container>
			</Main>
		</>
	)
}
