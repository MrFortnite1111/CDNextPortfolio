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
            <Layout>
                <PageTransition routeKey={router.pathname}>
                    <Component {...pageProps} />
                </PageTransition>
            </Layout>
        </main>
    );
}
