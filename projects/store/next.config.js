module.exports = {
	eslint: {
		// Warning: Dangerously allow production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
				],
			},
			{
				source: '/:all*(svg|jpg|png|WebP|webp)',
				locale: false,
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=9999999999, must-revalidate',
					},
				],
			},
		];
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
};
