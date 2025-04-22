import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link
                rel="icon"
                href="/icon?<generated>"
                type="image/<generated>"
                sizes="<generated>"
            />
            <link
                rel="apple-touch-icon"
                href="/apple-icon?<generated>"
                type="image/<generated>"
                sizes="<generated>"
            />
            <Head />
            <body style={{ backgroundColor: '#14111D' }}>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}