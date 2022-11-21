import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'

const modules = [
	'auto-crystal - Automatically places and breaks crystals to damage other players.',
	"anvil-aura - Automatically places anvils above a target's head to break their helmet.",
	'auto-log - Automatically disconnects when you fall below the set health.',
	'auto-trap - Automatically traps opponents in obsidian.',
	'burrow - Places a block inside your legs.',
	'criticals - Lands critical hits on every hit.',
	"funny-crystal - Places crystals above the target's head to deal damage.",
	'hole-fill - Fills holes with specified blocks.',
	"kill-aura - Bri'ish PVP",
	'quiver - Shoots yourself with an effect arrow.',
	'self-trap - Places blocks above your head to prevent damage from beds, pistons, etc',
	'surround - Surrounds your legs with blast proof blocks.',
	'web-aura - LGBT style module.',
]

export const Combat: FC<{}> = () => {
	return (
		<Box sx={{ pt: 2 }}>
			<Typography variant='h4' gutterBottom>
				Combat
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
