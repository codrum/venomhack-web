/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
	assetPrefix: isProd ? '/venomhack.com/' : undefined,
	swcMinify: true,
	reactStrictMode: true,
	// comment out while in dev
	images: {
		loader: 'imgix',
		path: 'https://stillwater-disc-golf.imgix.net',
	},
}
