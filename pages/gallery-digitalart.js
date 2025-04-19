"use client"
import React from 'react';
import styles from '../styles/styles.module.css';
import Header from '../src/components/global/Header';
import bannerImg from '../src/assets/images/banner-images/banner.jpg';
import IllustrationGallery from '../src/components/galleries/gallerygridlayout';
import Head from 'next/head';
import Footer from '../src/components/global/Footer';

const images = [
    { src: "/images/illustrations/searedembers-poster.jpg", alt: "Seared Embers Poster - DnD", title: "Seared Embers Poster - DnD", className: "skinny" },
    { src: "/images/illustrations/lovers-tarotmockup.jpg", alt: "Tarot Cards Passion Project - The Lovers", title: "Tarot Cards Passion Project - The Lovers", className: "tall" },
    { src: "/images/illustrations/meteoras-dance.jpg", alt: "Meteora's Dance (2024)", title: "Meteora's Dance (2024)", className: "tall" },
    { src: "/images/illustrations/dndalbum-mockup.jpg", alt: "Elegy for M'yirgdrar Album Mockup", title: "Elegy for M'yirgdrar Album Mockup", className: "tall" },
    { src: "/images/illustrations/miragius-design.jpg", alt: "Miragius Character Redesign (2024)", title: "Miragius Character Redesign (2024)", className: "tall" },
    { src: "/images/illustrations/thelight.jpg", alt: "The Light (2024)", title: "The Light (2024)", className: "skinny" },
    { src: "/images/illustrations/farewell-celeste-artwork.jpg", alt: "Farewell (Celeste)", title: "Farewell (Celeste)", className: "tall" },
    { src: "/images/illustrations/overgrowth-print.jpg", alt: "Overgrowth (2024)", title: "Overgrowth (2024)", className: "large" },
    { src: "/images/illustrations/electrifying-poster.jpg", alt: "Electrifying (2023)", title: "Electrifying (2023)", className: "skinny" },
    { src: "/images/illustrations/serenityinthousands.jpg", alt: "Serenity in Thousands (2023)", title: "Serenity in Thousands (2023)", className: "tall" },
  ];
  

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
                        title="ILLUSTRATIONS PORTFOLIO"
                    />

                    <IllustrationGallery images={images} />

                    <Footer />
                </div>
            </main>

        </div>
    );

}