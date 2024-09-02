/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	distDir: "build",
	// output: 'export',s
	images: {
		unoptimized: true,
	},
};

module.exports = nextConfig
