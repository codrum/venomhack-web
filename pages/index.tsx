import Head from 'next/head'
import Image from 'next/image'
import YouTube, { YouTubeEvent } from 'react-youtube'
import { Header } from '../lib/components/Header'
// import styles from '../styles/Home.module.css'

export default function Home() {
	const opts = {
		height: '100%',
		width: '100%',
		playerVars: {
			autoplay: 0,
		},
	}
	const onReady = (event: YouTubeEvent<any>) => {
		event.target.pauseVideo()
	}
	return (
		<div>
			<Head>
				<title>VenomHack: A Meteor addon by VenomForce</title>
				<meta
					name='description'
					content='The best CrystalPvP Addon available.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<Header />
				<YouTube
					style={{ height: '100vh', width: '100vw' }}
					videoId='RdikQLQ13B8'
					opts={opts}
					onReady={onReady}
				/>
			</main>
		</div>
	)
}
