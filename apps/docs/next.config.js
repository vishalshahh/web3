/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	transpilePackages: ["@repo/ui"],
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		unoptimized: true,
	},
  
};

export default nextConfig;
