import { Box } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useMemo, useRef } from 'react'
let counter = 0

export const DonateButton = () => {
	return (
		<Box sx={{ textAlign: 'center' }}>
			<Image
				src='/assets/donate.png'
				width={100}
				height={100}
				alt='donate'
			/>
		</Box>
	)
}
