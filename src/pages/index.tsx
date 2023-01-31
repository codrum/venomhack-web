import { Backdrop } from '@/components/Backdrop'
import { Header } from '@/components/Header'
import { Container } from '@/components/layout/Container'
import { Typography } from '@/components/typography'
import { rem } from '@/theme/helpers'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'

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
`
const Heading2 = styled(Typography.Heading.Default)`
	@media only screen and (max-width: 768px) {
		text-indent: 36px;
	}
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
				<title>Home | Venomhack420</title>
				<meta
					name='title'
					content='Venomhack420 Official Release by Venomforce'
				></meta>
				<meta
					name='description'
					content='Venomhack420 is available as a Meteor Client addon or as a standalone client. It was pioneered by tyrannus00 and other members of Venomforce and everyone who uses Venomhack is a god at pvp.'
				/>
				<meta property='og:site_name' content='Venomhack420' />
				<meta property='og:type' content='website' />
				<meta
					property='og:image'
					content='https://venomhack.com/assets/vficonlarge.png'
				/>
				<meta
					property='og:title'
					content='Venomhack420 Official Release by Venomforce'
				/>
				<meta property='og:url' content='https://venomhack.com' />
				<meta
					property='og:description'
					content='Venomhack420 is available as a Meteor Client addon or as a standalone client. It was pioneered by tyrannus00 and other members of Venomforce and everyone who uses Venomhack is a god at pvp.'
				/>
				<meta name='twitter:card' content='summary_large_image' />

				<meta name='theme-color' content='#000000' />
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
					<Typography.Heading.Small>
						Venomhack420 is here.
					</Typography.Heading.Small>
				</Container>
			</Main>
		</>
	)
}
