import { Box, Button } from '@mui/material'
import Link from 'next/link'
import React, { FC } from 'react'

export const DownloadButton: FC<{ title: string; url: string }> = ({
	title,
	url,
}) => {
	return (
		<Link href={url}>
			<Box sx={{}}>
				<Button sx={{ color: 'white', border: 2 }}>{title}</Button>
			</Box>
		</Link>
	)
}
