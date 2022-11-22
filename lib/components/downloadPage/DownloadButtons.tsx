import { Box, Grid } from '@mui/material'
import React, { FC } from 'react'
import { DownloadButton } from './DownloadButton'
type Button = { title: string; url: string }
const buttons: Button[] = [
	{
		title: 'Venomhack420 Newbase',
		url: 'https://direct-link.net/542726/venomhack420-newbase',
	},
	{
		title: 'Venomhack420 Meteor Addon',
		url: 'https://direct-link.net/542726/venomhack420-273-meteor',
	},
]
export const DownloadButtons: FC<{}> = () => {
	const downloadButtons = buttons.map((button) => (
		<Grid item xs={12} key={button.title} sx={{ pb: 4 }}>
			<DownloadButton title={button.title} url={button.url} />
		</Grid>
	))
	return (
		<Grid container justifyContent={'center'} sx={{ textAlign: 'center' }}>
			{downloadButtons}
		</Grid>
	)
}
