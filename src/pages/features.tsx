import Head from 'next/head'
import styled from 'styled-components'
import { Typography } from '@/components/typography'
import { Header } from '@/components/Header'
import { Container } from '@/components/layout/Container'
import { rem } from '@/theme/helpers'
import { Backdrop } from '@/components/Backdrop'
import { useState } from 'react'
import Image from 'next/image'
import { ImageContainer } from './downloads'
import { TextWithImage } from '@/components/TextWithImage'
const HeadingContainer = styled.div`
	padding: ${rem(32)} 0;
`
const FeatureHeadingContainer = styled.div`
	text-align: center;
`
const BodyContainer = styled(Container)`
	padding-left: ${rem(128)};
	@media only screen and (max-width: 992px) {
		padding-left: ${rem(32)};
	}
	padding-bottom: ${rem(64)};
`
const FeatureHeading = styled(Typography.Heading.Default)`
	text-indent: 32px;
	@media only screen and (max-width: 768px) {
		text-indent: 24px;
		font-size: 3rem;
	}
`

const FlexTextContainer = styled.div`
	justify-content: flex-start;
	display: flex;
`
export default function FeaturesPage() {
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
				<title>Features | Venomhack420</title>
				<meta
					name='title'
					content='Venomhack420 Official Features by Venomforce'
				/>
				<meta
					name='description'
					content='Venomhack420 has over 70 unique mods in the Newbase version. Venomhack420 is most known 
					for its next-generation Crystal Aura, which allows the player to dominate opponents in CPvP.'
				/>
				<meta property='og:site_name' content='Venomhack420' />
				<meta property='og:type' content='website' />
				<meta
					property='og:image'
					content='https://venomhack.com/assets/venomfors.jpg'
				/>
				<meta
					property='og:title'
					content='Venomhack420 Official Features by Venomforce'
				/>
				<meta property='og:url' content='https://venomhack.com' />
				<meta
					property='og:description'
					content='Venomhack420 has over 70 unique mods in the Newbase version. Venomhack420 is most known 
					for its next-generation Crystal Aura, which allows the player to dominate opponents in CPvP.'
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
					<FeatureHeadingContainer>
						<FeatureHeading>Features</FeatureHeading>
					</FeatureHeadingContainer>
					<BodyContainer>
						<HeadingContainer>
							<TextWithImage text={'Chat'} alignLeft />
						</HeadingContainer>

						<Typography.Body.Small>
							Armor Message - Sends a message in chat when your or
							your friends armor runs low
							<br />
							Auto Cope - Automatically sends a cope message in
							chat when you die <br />
							Chat Control - Grants you full control over your
							chat experience <br />
							Greeter - Sends a welcome message when someone joins
							the server <br />
							Log Detection - Sends a message when someone combat
							logs
							<br />
							Notifier - Notifies you of certain events
							<br />
							Pop Crash - Sends uni code in a msg when someone
							pops to crash them
						</Typography.Body.Small>
						<HeadingContainer>
							<TextWithImage text={'Combat'} alignLeft />
						</HeadingContainer>
						<Typography.Body.Small>
							Auto Crystal - Automatically places and breaks
							crystals to damage other players <br />
							Anvil Aura - Automatically places anvils above a
							target&apos;s head to break their helmet <br />
							Auto Log - Automatically disconnects when you fall
							below the set health <br />
							Auto Trap - Automatically traps opponents in
							obsidian
							<br />
							Burrow - Places a block inside your legs <br />
							Criticals - Lands critical hits on every hit <br />
							Funny Crystal - Places crystals above the
							target&apos;s head to deal damage <br />
							Hole Fill - Fills holes with specified blocks <br />
							Kill Aura - Bri&apos;ish PVP <br />
							Quiver - Shoots yourself with an effect arrow <br />
							Self Trap - Places blocks above your head to prevent
							damage from beds, pistons, etc <br />
							Surround - Surrounds your legs with blast proof
							blocks
							<br />
							Web Aura - LGBT style module
						</Typography.Body.Small>
						<HeadingContainer>
							<TextWithImage text={'Exploits'} alignLeft />
						</HeadingContainer>
						<Typography.Body.Small>
							Air Place - Allows you to place blocks in the air
							<br />
							Anti Hunger - Prevents hunger level from decreasing
							<br />
							Chorus Control - Delays teleport from chorus flowers
							until you press sneak <br />
							Fast Break - Allows you to mine blocks faster <br />
							Fast Use - Allows you to use items with specified
							cooldown <br />
							Multi Task - Allows you to eat and mine at the same
							time <br />
							No Server Pack - Blocks server resource packs
							<br />
							Reach - Allows to set your max reach distance to a
							custom value <br />
							XCarry - Allows you to carry items in your crafting
							slots
						</Typography.Body.Small>
						<HeadingContainer>
							<TextWithImage text={'Misc'} alignLeft />
						</HeadingContainer>
						<Typography.Body.Small>
							Auto Crafter - Crafts items automatically <br />
							Auto Farm - Automatically farms for you <br />
							Auto Regear - Automatically sorts your inventory
							<br />
							Auto Respawn - Useless module because Venomhack
							users never die <br />
							Auto Xp - Mends your armor by throwing experience
							bottles <br />
							Egap Finder - Automatically finds egaps for you
							<br />
							Fake Player - Spawns a fake player for testing
							<br />
							Middle Click Friend - Allows you to friend/unfriend
							players by using your middle mouse button on them
							<br />
							Middle Click Pearl - Throws a pearl without needing
							to swap slots <br />
							No Mining Trace - Allows you to mine through
							entities <br />
							No Rotate - stops rotations
							<br />
							Packet Logger - Logs incoming and outgoing packets
							<br />
							Packet Place - Prevents client-side prediction of
							placed blocks to prevent ghost blocks <br />
							Ping Spoof - Makes your ping appear higher than it
							actually is <br />
							Portals - Allows GUI&apos;s to still be accessible
							in portals <br />
							Timer - Speeds up or slows down your client side
							game
						</Typography.Body.Small>
						<HeadingContainer>
							<TextWithImage text={'Movement'} alignLeft />
						</HeadingContainer>
						<Typography.Body.Small>
							Anti Lagback - Makes rubberbanding less likely
							<br />
							Auto Walk - Makes you walk and walk and walk <br />
							Custom Angle - Locks your rotation <br />
							Fly - Allows you to fly in survival mode
							<br />
							Inventory Walk - Allows you to move as normally
							inside of guis <br />
							Moses - Lets you walk through liquids as if they
							were air <br />
							No Slow - Makes you go faster under certain
							circumstances <br />
							No Fall - no fall damage L for them
							<br />
							Scaffold - Places blocks underneath your feet <br />
							Speed - Go fast be fast zoom <br />
							Sprint - Makes you sprint all the time
							<br />
							Step - Allows you walk up blocks as if they were
							stairs
							<br />
							Velocity - Modifies knockback values
						</Typography.Body.Small>
						<HeadingContainer>
							<TextWithImage text={'Render'} alignLeft />
						</HeadingContainer>
						<Typography.Body.Small>
							Hud - Renders various elements on your screen <br />
							Block Outline - Allows you to customise selected
							block rendering <br />
							Click Gui - Opens a gui to configure most parts
							about the client <br />
							Custom Fov - Allows you to increase your fov beyond
							vanilla limits <br />
							Custom Pops - Adjusts totem pop particles <br />
							Custom Time - Allows you to change the time of your
							world <br />
							Esp - Cool renders around entities <br />
							Freecam - Allows you to move your camera around
							freely <br />
							Fullbright - Allows you to see in darkness <br />
							Hole Esp - Renders holes which are safe from
							crystals <br />
							Kill Effects - Become thor <br />
							Logout Spots - Renders where players logged out
							<br />
							Name Tags - Applies more renderings to player
							nametags <br />
							No Render - Prevents certain aspects of the game
							from rendering <br />
							Old Animations - Removes the 1.9 swing progress
							<br />
							Shader Overlay - Renders overlays of some shaders
							<br />
							Storage Esp - Highlights storage blocks
							<br />
							Tracers - Draws a line to other players positions
							<br />
							User Capes - Shows a Venomhack cape on Venomhack
							users <br />
							View Model - Changes how items in your hands get
							displayed
						</Typography.Body.Small>
					</BodyContainer>
				</Container>
			</main>
		</>
	)
}
