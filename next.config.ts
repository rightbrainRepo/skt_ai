import type { NextConfig } from "next";
import path from 'path';
import dotenv from 'dotenv';

const envFile = `.env.${process.env.APP_ENV ?? 'loc'}`
dotenv.config({ path: envFile })
// 김재성 : 최종 산출물은 아래 문구 제거
const assetPath = `${process.env.NEXT_PUBLIC_ASSET_PATH ? process.env.NEXT_PUBLIC_ASSET_PATH : ''}`

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
	},
	// 김재성 : 최종 산출물은 아래 문구 제거
	assetPrefix: assetPath,
};

export default nextConfig;
