import React from 'react';
import NavBar from '../nav/NavBar';
import styles from '../../../styles/styles.module.css';

export default function Header({ bannerImage, title }) {
    return (
        <header className={styles.header_container}>
            <div className={styles.header}>
                <NavBar />
            </div>
            <div className={styles.banner} style={{ backgroundImage: `url(${bannerImage})` }}>
                <p className={styles.h1}>{title}</p>
            </div>
        </header>
    );
}
