/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
	// assetPrefix: isProd ? '/venomhack.com/' : undefined,
	swcMinify: true,
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		unoptimized: true,
	},
}
