import React from 'react';
import Header from '../src/components/global/Header';
import bannerImg from '../public/images/banners/graffiti-background.jpg';
import Head from 'next/head';
import styles from '../styles/styles.module.css';
import Image from 'next/image';
import GraphicDesignThumbnail from '../public/images/main/graphicdesign-thumbnail.jpg';
import DigitalArtThumbnail from '../public/images/main/illustrations-thumbnail.jpg';
import ThumbnailDesignThumbnail from '../public/images/main/thumbnaildesign-thumbnail.jpg';
import Footer from '../src/components/global/Footer';
import { useRouter } from 'next/router';


export default function Home() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <Head>
                <title>Cosmic Designs | Design Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.body}>
                <div className={styles.container}>
                    <Header
                        bannerImage={bannerImg.src}
                        title="DESIGN GALLERIES"
                    />

                    <div className={styles.section_2_alt}>
                        <div className={styles.section_2_image}>
                            <Image
                                className={styles.img}
                                src={ThumbnailDesignThumbnail.src}
                                width={1800}
                                height={2500}
                                alt="An image showcasing three Youtube Thumbnails."
                            />
                        </div>
                        <div className={styles.section_2_description}>
                            <h3 className={styles.h3}>Thumbnail Designs</h3>
                            <hr className={styles.hr} />
                            <p className={styles.p}>
                                In recent times, I have done some freelance thumbnail design work for a small streamer, Nyxus Vivyd.
                                Throughout the progress of my work, I have become more flexible in this line of work and a great understanding
                                of how to make eye-catching thumbnails along with my SEO knowledge from completing a course in Social Media Content
                                Creation.
                            </p>
                            <div className={styles.button_container}>
                                <button
                                    className={styles.button}
                                    onClick={() => router.push('/gallery-thumbnails')}
                                >
                                    Thumbnail Design Portfolio
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.section_2}>
                        <div className={styles.section_2_image}>
                            <Image
                                className={styles.img}
                                src={GraphicDesignThumbnail.src}
                                width={1800}
                                height={2500}
                                alt="An image showcasing two posters and a postcard."
                            />
                        </div>
                        <div className={styles.section_2_description}>
                            <h3 className={styles.h3}>Graphic Design</h3>
                            <hr className={styles.hr} />
                            <p className={styles.p}>
                                I have been studying and refining my use of minimalistic designs when it comes
                                to learning all about Graphic Design in North Idaho College. During my time here,
                                I've learned the basics to using Adobe Illustrator, Photoshop, and InDesign to create
                                vector-based illustrations and create appealing Photoshop projects.
                            </p>
                            <div className={styles.button_container}>
                                <button
                                    className={styles.button}
                                    onClick={() => router.push('/gallery-graphicdesign')}
                                >
                                    Graphic Design Portfolio
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.section_2_alt}>
                        <div className={styles.section_2_image}>
                            <Image
                                className={styles.img}
                                src={DigitalArtThumbnail.src}
                                width={1800}
                                height={2500}
                                alt="An image showcasing three different illustrations."
                            />
                        </div>
                        <div className={styles.section_2_description}>
                            <h3 className={styles.h3}>Illustrations/Procreate</h3>
                            <hr className={styles.hr} />
                            <p className={styles.p}>
                                Drawing has always been my passion since I was a kid, but I only really started with
                                the digital art medium in 2020. Taking a few art classes in middle/high school and learning
                                from informative Youtube tutorials on using the software, I am able to smoothly create vibrant
                                and meaningful art pieces that stand out with their own flare and style.
                            </p>
                            <div className={styles.button_container}>
                                <button
                                    className={styles.button}
                                    onClick={() => router.push('/gallery-digitalart')}
                                >
                                    Illustration Portfolio
                                </button>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>

            </main>

        </div>
    );
}

