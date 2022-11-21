import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

export const DonateButton = () => {
	return (
		<Link href='https://www.paypal.com/donate/?hosted_button_id=NBUXAR4UDXHFA'>
			<Box sx={{ textAlign: 'center' }}>
				<Image
					src='/assets/donate.png'
					width={100}
					height={100}
					alt='donate'
				/>
			</Box>
		</Link>
	)
}
