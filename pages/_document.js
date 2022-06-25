import {Html, Head, Main, NextScript} from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
            </Head>
            <body>
            <Main/>
            <NextScript/>
            <Script src="https://unpkg.com/@popperjs/core@2"></Script>
            </body>
        </Html>
    )
}