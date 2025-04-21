import '../styles/global.css';
import { Montserrat, Asap } from 'next/font/google';
import PageTransition from '../src/components/global/PageTransition';

export const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
})

export const asap = Asap({
    subsets: ['latin'],
    display: 'swap',
    variable: '--asap-font'
})

export default function MyApp({ Component, pageProps }) {

    return (<main className={asap.variable}>
        <PageTransition>
            <Component {...pageProps} />
        </PageTransition>
    </main>)
}