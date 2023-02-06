import { Backdrop } from '@/components/Backdrop'
import { ShowcaseHead } from '@/components/head'
import { Header } from '@/components/Header'
import { Container } from '@/components/layout/Container'
import { Typography } from '@/components/typography'
import { rem } from '@/theme/helpers'
import { useState } from 'react'
import styled from 'styled-components'

const DownloadsHeading = styled(Typography.Heading.Default)`
	text-indent: 32px;
	@media only screen and (max-width: 768px) {
		font-size: 3rem;
	}
`
const FeatureHeaderContainer = styled.div`
	text-align: center;
	padding-bottom: ${rem(64)};
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
const VideoContainer = styled.div<{ bg?: boolean }>`
	position: relative;
	padding-bottom: 56.25%;
	height: 0;
	display: block;
	@media only screen and (max-width: 768px) {
		margin-bottom: ${rem(64)};
	}
	@media only screen and (min-width: 768px) {
		margin: 0 ${rem(128)};
	}
	background: ${(props) =>
		props.bg
			? 'url(/assets/loading.gif) center center no-repeat;'
			: 'none;'};
`
const IFrame = styled.iframe`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 85%;
	@media only screen and (max-width: 768px) {
		height: 100%;
	}
`
export default function ShowcasePage() {
	const [drawerOpen, setDrawerOpen] = useState(false)
	const [loading, setLoading] = useState({
		one: true,
		two: true,
		three: true,
	})
	const handleOpenDrawer = () => {
		setDrawerOpen(true)
	}
	const handleCloseDrawer = () => {
		setDrawerOpen(false)
	}
	const backDrop = drawerOpen && <Backdrop closeDrawer={handleCloseDrawer} />
	const handleLoad = (num: 1 | 2 | 3) => {
		num === 1 && setLoading({ ...loading, one: false })
		num === 2 && setLoading({ ...loading, two: false })
		num === 3 && setLoading({ ...loading, three: false })
	}
	return (
		<>
			<ShowcaseHead />
			{backDrop}
			<main>
				<Container>
					<Header
						handleOpenDrawer={handleOpenDrawer}
						drawerOpen={drawerOpen}
					/>
					<FeatureHeaderContainer>
						<DownloadsHeading>Showcase</DownloadsHeading>
					</FeatureHeaderContainer>
					<VideoContainer bg={loading.one}>
						<IFrame
							onLoad={() => handleLoad(1)}
							width='560'
							height='315'
							src='https://www.youtube.com/embed/SfvS7yffVTA?controls=1'
							allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
							frameBorder='0'
						></IFrame>
					</VideoContainer>
					<VideoContainer bg={loading.two}>
						<IFrame
							onLoad={() => handleLoad(2)}
							width='560'
							height='315'
							src='https://www.youtube.com/embed/RdikQLQ13B8?controls=1'
							allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
							frameBorder='0'
						></IFrame>
					</VideoContainer>
					<VideoContainer bg={loading.three}>
						<IFrame
							onLoad={() => handleLoad(3)}
							width='560'
							height='315'
							src='https://www.youtube.com/embed/Z7-Ljh1rtKw?controls=1'
							allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
							frameBorder='0'
						></IFrame>
					</VideoContainer>
				</Container>
			</main>
		</>
	)
}
