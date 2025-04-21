import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState, ReactNode } from 'react';

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

interface PageTransitionProps {
    children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
    const router = useRouter();
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const handleStart = () => setIsTransitioning(true);
        const handleComplete = () => setIsTransitioning(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, [router]);

    return (
        <>
            <AnimatePresence mode="wait">
                {isTransitioning && (
                    <motion.div
                        key="transition-overlay"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.5 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            backgroundColor: '#14111D',
                            zIndex: 9999,
                            pointerEvents: 'none',
                        }}
                    />
                )}
            </AnimatePresence>

            <div style={{ position: 'relative', zIndex: 0 }}>
                {children}
            </div>
        </>
    );
}
