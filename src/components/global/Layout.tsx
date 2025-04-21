import { ReactNode } from 'react';
import NavBar from '../nav/NavBar';
// import Footer from './Footer'; // Uncomment if needed

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <NavBar />
            <div style={{ position: 'relative', zIndex: 0 }}>
                {children}
            </div>
            {/* <Footer /> */}
        </>
    );
}
