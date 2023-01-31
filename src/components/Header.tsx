import styled from 'styled-components'
import React, { FunctionComponent, useState } from 'react'
import { Typography } from './typography'
import { rem } from '@/theme/helpers'
import { useMediaQuery } from 'react-responsive'
import { Drawer } from './Drawer'
import { MenuIcon } from './MenuIcon'
import Link from 'next/link'

const Grid = styled.div`
	width: 100%;
	flex-direction: row;
	@media only screen and (min-width: 768px) {
		display: flex;
	}
	@media only screen and (max-width: 768px) {
		display: none;
	}
	justify-content: space-between;
	padding-top: ${rem(32)};
	padding-bottom: ${rem(48)};
`
const Item = styled.div``
const A = styled(Link)`
	display: inline-block;
	:nth-child(1),
	:nth-child(3) {
		padding-right: ${rem(32)};
	}
	cursor: pointer;
`
const MobileHeading = styled.div`
	padding-bottom: ${rem(32)};
	@media only screen and (max-width: 768px) {
		display: block;
	}

	@media only screen and (min-width: 768px) {
		display: none;
	}
`

export const Header: FunctionComponent<{
	handleOpenDrawer: () => void
	drawerOpen: boolean
}> = ({ handleOpenDrawer, drawerOpen }) => {
	return (
		<>
			<MobileHeading>
				<div onClick={handleOpenDrawer}>
					<MenuIcon />
				</div>
			</MobileHeading>
			<Grid>
				<Item>
					<A href='/'>
						<Typography.Body.Default>Home</Typography.Body.Default>
					</A>
					<A href='/features'>
						<Typography.Body.Default>
							Features
						</Typography.Body.Default>
					</A>
				</Item>
				<Item>
					<A href='/downloads'>
						<Typography.Body.Default>
							Download
						</Typography.Body.Default>
					</A>
					<A href='https://paypal.me/fargendo'>
						<Typography.Body.Default>
							Donate
						</Typography.Body.Default>
					</A>
				</Item>
			</Grid>
			<Drawer drawerOpen={drawerOpen} />
		</>
	)
}
