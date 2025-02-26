'use client';

import React, {useEffect} from 'react';
import {usePathname} from 'next/navigation';
import Script from "next/script";

const GOOGLE_ANALYTICS = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export default function GoogleAnalytics() {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window.gtag === 'function') {
            window.gtag('config', GOOGLE_ANALYTICS, {
                page_path: pathname,
            });
        }
    }, [pathname]);

    return <>
        <Script
            async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS}`}
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', '${GOOGLE_ANALYTICS}', {
				  page_path: window.location.pathname,
				});
			`}
        </Script>
    </>;
}