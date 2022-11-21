/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	assetPrefix: isProd ? '/venomhack.com/' : '',
}

module.exports = {
	nextConfig,
	// comment out while in dev
	images: {
		unoptomized: 'true',
	},
}
