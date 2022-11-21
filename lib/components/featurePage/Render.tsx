import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'

const modules = [
	'hud - Renders various elements on your screen.',
	'block-outline - Allows you to customise selected block rendering.',
	'click-gui - Opens a gui to configure most parts about the client.',
	'custom-fov - Allows you to increase your fov beyond vanilla limits.',
	'custom-pops - Adjusts totem pop particles.',
	'custom-time - Allows you to change the time of your world.',
	'esp - Cool renders around entities.',
	'freecam - Allows you to move your camera around freely.',
	'fullbright - Allows you to see in darkness.',
	'hole-esp - Renders holes which are safe from crystals.',
	'kill-effects - Become thor.',
	'logout-spots - Renders where players logged out.',
	'name-tags - Applies more renderings to player nametags.',
	'no-render - Prevents certain aspects of the game from rendering.',
	'old-animations - Removes the 1.9 swing progress.',
	'shader-overlay - Renders overlays of some shaders.',
	'storage-esp - Highlights storage blocks.',
	'tracers - Draws a line to other players positions.',
	'user-capes - Shows a Venomhack cape on Venomhack users.',
	'view-model - Changes how items in your hands get displayed.',
]

export const Render: FC<{}> = () => {
	return (
		<Box sx={{ pt: 2, pb: 8 }}>
			<Typography variant='h4' gutterBottom>
				Render
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
