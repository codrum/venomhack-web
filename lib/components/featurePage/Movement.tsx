import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'

const modules = [
	'anti-lagback - Makes rubberbanding less likely.',
	'auto-walk - Makes you walk and walk and walk.',
	'custom-angle - Locks your rotation.',
	'fly - Allows you to fly in survival mode.',
	'inventory-walk - Allows you to move as normally inside of guis.',
	'moses - Lets you walk through liquids as if they were air.',
	'no-slow - Makes you go faster under certain circumstances.',
	'no-fall - no fall damage L for them',
	'scaffold - Places blocks underneath your feet.',
	'speed - Go fast be fast zoom.',
	'sprint - Makes you sprint all the time.',
	'step - Allows you walk up blocks as if they were stairs.',
	'Velocity - Modifies knockback values.',
]

export const Movement: FC<{}> = () => {
	return (
		<Box sx={{ pt: 2 }}>
			<Typography variant='h4' gutterBottom>
				Movement
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
