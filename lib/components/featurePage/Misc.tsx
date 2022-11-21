import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'

const modules = [
	'auto-crafter - Crafts items automatically.',
	'auto-farm - Automatically farms for you.',
	'auto-regear - Automatically sorts your inventory.',
	'auto-respawn - Useless module because Venomhack users never die.',
	'auto-xp - Mends your armor by throwing experience bottles.',
	'egap-finder - Automatically finds egaps for you.',
	'fake-player - Spawns a fake player for testing.',
	'middle-click-friend - Allows you to friend / unfriend players by using your middle mouse button on them.',
	'middle-click-pearl - Throws a pearl without needing to swap slots.',
	'no-mining-trace - Allows you to mine through entities.',
	'no rotate - stops rotations',
	'packet-logger - Logs incoming and outgoing packets.',
	'packet-place - Prevents client-side prediction of placed blocks to prevent ghost blocks.',
	'ping-spoof - Makes your ping appear higher than it actually is.',
	"portals - Allows GUI's to still be accessible in portals.",
	'timer - Speeds up or slows down your client side game.',
]

export const Misc: FC<{}> = () => {
	return (
		<Box sx={{ pt: 2 }}>
			<Typography variant='h4' gutterBottom>
				Misc
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
