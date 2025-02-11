import type { Metadata } from "next";
import "@/assets/scss/main.scss";
import React from "react";
import { getAssetPath } from '@/utils/getAssetPath';

export const metadata: Metadata = {
	title: "Aster : Navigate your life",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta property="og:image" content={getAssetPath('/images/share.jpg')} />
			</head>
			<body>
				{children}
			</body>
		</html>
	);
}
