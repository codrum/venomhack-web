import { Box, Button, useTheme } from '@mui/material'
import Link from 'next/link'
import React, { FC } from 'react'

export const DownloadButton: FC<{ title: string; url: string }> = ({
	title,
	url,
}) => {
	const theme = useTheme()
	return (
		<Link href={url}>
			<Box sx={{}}>
				<Button
					sx={{
						color:
							theme.palette.mode === 'dark' ? 'white' : 'black',
						border: 2,
					}}
				>
					{title}
				</Button>
			</Box>
		</Link>
	)
}
