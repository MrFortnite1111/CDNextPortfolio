import '../styles/global.css';
import { Montserrat, Asap } from 'next/font/google';
import PageTransition from '../src/components/global/PageTransition';
import Layout from '../src/components/global/Layout';


export const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
});

export const asap = Asap({
    subsets: ['latin'],
    display: 'swap',
    variable: '--asap-font',
});

export default function MyApp({ Component, pageProps, router }) {
    return (
        <main className={asap.variable}>
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
            <Layout>
                <PageTransition routeKey={router.pathname}>
                    <Component {...pageProps} />
                </PageTransition>
            </Layout>
        </main>
    );
}
