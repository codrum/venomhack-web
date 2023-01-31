import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
const BackDrop = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 100;
	top: 0;
	right: 0;
`
export const Backdrop: FunctionComponent<{ closeDrawer: () => void }> = ({
	closeDrawer,
}) => {
	return <BackDrop onClick={closeDrawer}></BackDrop>
}
