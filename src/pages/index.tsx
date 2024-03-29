import { Backdrop } from '@/components/Backdrop'
import { HomeHead } from '@/components/head'
import { Header } from '@/components/Header'
import { Container } from '@/components/layout/Container'
import { TextWithImage } from '@/components/TextWithImage'
import { Typography } from '@/components/typography'
import { rem } from '@/theme/helpers'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import { BodyContainer } from './downloads'

const ImageContainer = styled.div`
	position: relative;
	width: 260px;
	height: 400px;
	margin: auto;
	margin-bottom: ${rem(32)};
	@media only screen and (max-width: 768px) {
		width: 195px;
		height: 300px;
		margin-bottom: 3rem;
	}
`
const Main = styled.main`
	overflow-y: hidden;
	overflow-x: hidden;
`
export const HeadingContainer = styled.div`
	max-width: 100%;
	text-align: center;
`
const HomeHeadingContainer = styled(HeadingContainer)`
	@media only screen and (max-width: 768px) {
		margin-bottom: 3rem;
	}
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

const SubHeadingButtonText = styled(Typography.Heading.Small)`
	padding: 8px 24px;
	width: max-content;
	border-radius: 10px;
	margin-left: auto;
	margin-right: auto;
	border: 2px solid white;
`
const DiscordContainer = styled.div`
	margin-top: 8px;
	margin-bottom: 48px;
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
			<HomeHead />

			{backDrop}
			<Main>
				<Container>
					<Header
						handleOpenDrawer={handleOpenDrawer}
						drawerOpen={drawerOpen}
					/>
					<HomeHeadingContainer>
						<Heading>Venom</Heading>
						<Heading2>hack</Heading2>
					</HomeHeadingContainer>
					<ImageContainer>
						<Image
							src='/assets/vficonlarge.png'
							alt='venomforce logo'
							fill
						/>
					</ImageContainer>
					<SubHeadingText>Venomhack420 is here.</SubHeadingText>
					<DiscordContainer>
						<a href='https://discord.gg/venomforce'>
							<SubHeadingButtonText>
								Join the Discord
							</SubHeadingButtonText>
						</a>
					</DiscordContainer>
				</Container>
			</Main>
		</>
	)
}
