"use client"
import React from 'react';
import styles from '../styles/styles.module.css';
import Header from '../src/components/global/Header';
import bannerImg from '../src/assets/images/banner-images/banner.jpg';
import GraphicDesignGallery from '../src/components/galleries/gallerygridlayout';
import Head from 'next/head';
import Footer from '../src/components/global/Footer';

const images = [
    { src: "/images/graphicdesign/lawton-invitation.jpg", alt: "Lawton Invitation - Bubble Coral Aquarium", title: "Lawton Invitation - Bubble Coral Aquarium", className: "skinny" },
    { src: "/images/graphicdesign/inlander-summercamps-cover.jpg", alt: "Inlander Summer Camps Cover 2025", title: "Inlander Summer Camps Cover 2025", className: "tall" },
    { src: "/images/graphicdesign/mimiscafe-menusheet.png", alt: "Mimi's Cafe Menu Layout", title: "Mimi's Cafe Menu Layout", className: "tall" },
    { src: "/images/graphicdesign/chibean-onepage.jpg", alt: "Chi-Bean! One Page", title: "Chi-Bean! One Page", className: "large" },
    { src: "/images/graphicdesign/reefarchive-ux.jpg", alt: "Reef Archive UX Project", title: "Reef Archive UX Project", className: "large" },
    { src: "/images/graphicdesign/pepsitruckwrap_onepage.jpg", alt: "Pepsi Truck Wrap Design One Page", title: "Pepsi Truck Wrap Design One Page", className: "large" },
    { src: "/images/graphicdesign/exploremagazine-cover.jpg", alt: "EXPLORE Magazine Cover", title: "EXPLORE Magazine Cover", className: "tall" },
    { src: "/images/graphicdesign/ultraseven-independentstudy-poster.jpg", alt: "Ultraseven Independent Study Poster", title: "Ultraseven Independent Study Poster", className: "skinny" },
    { src: "/images/graphicdesign/midnightchildren-illustrativeset.png", alt: "Midnight Children Illustrative Set", title: "Midnight Children Illustrative Set", className: "tall" },
    { src: "/images/graphicdesign/artnouveau-poster.png", alt: "Art Nouveau Poster", title: "Art Nouveau Poster", className: "skinny" },
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
                        title="GRAPHIC DESIGN PORTFOLIO"
                    />

                    <GraphicDesignGallery images={images} />

                    <Footer />
                </div>
            </main>

        </div>
    );

}