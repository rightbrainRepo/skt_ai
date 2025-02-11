import type { NextConfig } from "next";
import path from 'path';


const nextConfig: NextConfig = {
	basePath: process.env.NODE_ENV === 'production' ? '/skt' : '',
	sassOptions: {
		api: "modern",
		silenceDeprecations: ['legacy-js-api'],
		includePaths: [path.join(__dirname, 'src/assets/scss')],
	},
	output: 'export',
};

export default nextConfig;
