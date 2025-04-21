import React from 'react';
import { useEffect, useState } from 'react';
import NavBar from '../nav/NavBar';
import styles from '../../../styles/styles.module.css';

export default function Header({ bannerImage, title }) {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => setOffsetY(window.scrollY);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={styles.header_container}>
            <div className={styles.header}>
                <NavBar />
            </div>
            <div className={styles.banner_wrapper}>
                <div
                    className={styles.banner}
                    style={{
                        backgroundImage: `url(${bannerImage})`,
                        transform: `translateY(${offsetY * 0.5}px)`,
                    }}
                >
                    <p className={styles.h1}>{title}</p>
                </div>
            </div>
        </header>
    );
}
