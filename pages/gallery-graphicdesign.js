"use client"
import React from 'react';
import styles from '../styles/styles.module.css';
import Header from '../src/components/global/Header';
import bannerImg from '../src/assets/images/banner-images/banner.jpg';
import GraphicDesignGallery from '../src/components/galleries/graphicdesigngallery';
import Head from 'next/head';
import Footer from '../src/components/global/Footer';

export default function Page() {

    return (
        <div className={styles.container}>
            <Head>
                <title>Cosmic Designs | Graphic Design Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.body}>
                <div className={styles.container}>
                    <Header
                        bannerImage={bannerImg.src}
                        title="GRAPHIC DESIGN PORTFOLIO"
                    />

                    <GraphicDesignGallery />

                    <Footer />
                </div>
            </main>

        </div>
    );

}