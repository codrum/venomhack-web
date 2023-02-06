import { color, rem } from '@/theme/helpers'
import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent, ReactNode } from 'react'

import styled from 'styled-components'
import { Typography } from './typography'

const SideDrawerContainer = styled.div<{ show?: boolean }>`
	height: 100%;
	width: 75%;
	background: ${color('darkGray')};
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 200;
	box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
	${(props) =>
		props.show
			? 'transform: translateX(0);'
			: 'transform: translateX(-125%);'}/* transition: transform 0.2s ease-out;*/
`

const SideDrawer: FunctionComponent<{
	show: boolean
	children: ReactNode
}> = ({ show, children }) => {
	return <SideDrawerContainer show={show}>{children}</SideDrawerContainer>
}

const Ul = styled.ul`
	margin: 0;
	padding: 0;
	text-align: left;
	margin-left: ${rem(16)};
`
const Li = styled.li`
	margin: 0;
	padding: 0;
	list-style-type: none;
`
const MenuText = styled(Typography.Heading.Small)`
	text-align: left;
	padding: ${rem(12)};
`

const ImageContainer = styled.div`
	position: relative;
	text-align: center;
	margin: auto;
	margin-top: ${rem(16)};
	margin-bottom: ${rem(16)};
`

const A = styled(Link)`
	display: block;

	cursor: pointer;
`

export const Drawer: FunctionComponent<{
	drawerOpen: boolean
}> = ({ drawerOpen }) => {
	return (
		<SideDrawer show={drawerOpen}>
			<ImageContainer>
				<Image
					src='/assets/vficon.png'
					alt='venomforce logo'
					width={150}
					height={150}
				/>
			</ImageContainer>
			<Ul>
				<Li>
					<A href='/'>
						<MenuText>Home</MenuText>
					</A>
				</Li>
				<Li>
					<A href='/features'>
						<MenuText>Features</MenuText>
					</A>
				</Li>
				<Li>
					<A href='/downloads'>
						<MenuText>Downloads</MenuText>
					</A>
				</Li>
				<Li>
					<A href='/showcase'>
						<MenuText>Showcase</MenuText>
					</A>
				</Li>
				<Li>
					<A href='https://discord.gg/VqRd4MJkbY'>
						<MenuText>Discord</MenuText>
					</A>
				</Li>
				<Li>
					<A href='https://paypal.me/fargendo'>
						<MenuText>Donate</MenuText>
					</A>
				</Li>
			</Ul>
		</SideDrawer>
	)
}
