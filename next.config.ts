import type { NextConfig } from "next";
import path from 'path';
import dotenv from 'dotenv';

const envFile = `.env.${process.env.APP_ENV ?? 'loc'}`
dotenv.config({ path: envFile})

const nextConfig: NextConfig = {
	sassOptions: {
		api: "modern",
		silenceDeprecations: ['legacy-js-api'],
		includePaths: [path.join(__dirname, 'src/assets/scss')],
	},
	output: 'export',
	trailingSlash: true,
	env: {
		NEXT_PUBLIC_WAITLIST_FORM_KEY: process.env.NEXT_PUBLIC_WAITLIST_FORM_KEY
	}
};

export default nextConfig;
