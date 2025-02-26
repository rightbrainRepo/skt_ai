import type { Metadata } from "next";
import "@/assets/scss/main.scss";
import React from "react";
import GoogleAnalytics from "@/app/analytics";

const URL = process.env.NEXT_PUBLIC_URL

export const metadata: Metadata = {
	title: "Aster : Navigate your life",
	description: "",
	openGraph: {
		images: [
			{ url: `${URL}/images/share.jpg` }
		]
	}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<body suppressHydrationWarning>
		<GoogleAnalytics />
		{children}
		</body>
		</html>
	);
}
