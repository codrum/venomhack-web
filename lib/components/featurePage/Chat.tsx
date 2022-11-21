import { Typography, Box } from '@mui/material'
import React from 'react'

const modules = [
	'armor-message -Sends a message in chat when your or your friends armor runs low.',
	'auto-cope - Automatically sends a cope message in chat when you die.',
	'chat-control - Grants you full control over your chat experience.',
	'greeter - Sends a welcome message when someone joins the server.',
	'log-detection - Sends a message when someone combat logs.',
	'notifier - Notifies you of certain events.',
	'pop-crash - Sends uni code in a msg when someone pops to crash them',
]

export const Chat = () => {
	return (
		<Box>
			<Typography variant='h4' gutterBottom>
				Chat
			</Typography>
			{modules.map((mod) => {
				return (
					<Typography variant='body1' key={mod}>
						{mod}
					</Typography>
				)
			})}
		</Box>
	)
}
