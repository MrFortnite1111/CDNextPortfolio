import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" type="image/png" href="/icon.png" sizes="32x32" />
                <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <body style={{ backgroundColor: '#14111D' }}>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}