"use client"
import React from 'react';
import styles from '../styles/styles.module.css';
import Image from 'next/image';
import Header from '../src/components/global/Header';
import bannerImg from '../public/images/banners/junyx.jpg';
import GraphicDesignGallery from '../src/components/galleries/gallerygridlayout';
import DesignSketch1 from '../public/images/yt-thumbnails/junyx-resource-concepts.jpg';
import InfinitumExample from '../public/images/yt-thumbnails/polaris1.jpg';
import JuNyxBanner from '../public/images/yt-thumbnails/junyx-banner.jpg';
import Head from 'next/head';
import Footer from '../src/components/global/Footer';
import { useRouter } from 'next/router';

const images = [
    { src: "/images/yt-thumbnails/junyx-finale-1.jpg", alt: "JuNyx, Early Game Finale Design 1", title: "JuNyx, Above and Beyond!", className: "large" },
    { src: "/images/yt-thumbnails/junyx-finale-2.jpg", alt: "JuNyx, Early Game Finale Design 2", title: "WE ARE SO BACK!!", className: "large" },
    { src: "/images/yt-thumbnails/junyx-finale-3.jpg", alt: "JuNyx, Early Game Finale Design 3", title: "Two Dumb Streamers Solve an Already Complete Puzzle", className: "large" },
    { src: "/images/yt-thumbnails/junyx-resource-1.jpg", alt: "JuNyx, Resource Gathering Design 1", title: "WHY DID THEY ADD MOSQUITOES?!", className: "large" },
    { src: "/images/yt-thumbnails/junyx-resource-2.jpg", alt: "JuNyx, Resource Gathering Design 2", title: "We Hated Gathering Resources...", className: "large" },
    { src: "/images/yt-thumbnails/junyx-resource-3.jpg", alt: "JuNyx, Resource Gathering Design 3", title: "The Nether (Beyond Depths) Ruined Us", className: "large" },
    { src: "/images/yt-thumbnails/junyx-finale-concepts.jpg", alt: "JuNyx, Early Game Finale Concepts", title: "JuNyx, Early Game Finale Concepts", className: "large" },
    { src: "/images/yt-thumbnails/nyxus-blocktales.jpg", alt: "Nyxus Vivyd, Blocktales Into the Pit", title: "Into the Pit! Solo Block Tales Pit Run", className: "large" },
    { src: "/images/yt-thumbnails/golf.jpg", alt: "Have You Ever Golfed With Your Life on the Line?", title: "Golf Wars", className: "large" },
    { src: "/images/yt-thumbnails/polaris1.jpg", alt: "INFINITUM: Polaris - 'Operation Ticket Snatchers' (Part 2)", title: "INFINITUM: Polaris - 'Operation Ticket Snatchers' (Part 2)", className: "large" },
    { src: "/images/yt-thumbnails/polaris2.jpg", alt: "INFINITUM: Polaris, Act II - 'WONDERLAND' (Part 7)", title: "INFINITUM: Polaris, Act II - 'WONDERLAND' (Part 7)", className: "large" },
    { src: "/images/yt-thumbnails/polaris3.jpg", alt: "INFINITUM: Polaris, Act II - 'A Hysterical End' (Part 8)", title: "INFINITUM: Polaris, Act II - 'A Hysterical End' (Part 8)", className: "large" },
];


export default function Page() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <Head>
                <title>Cosmic Designs | Thumbnail Design Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.body}>
                <div className={styles.container}>
                    <Header
                        bannerImage={bannerImg.src}
                        title="THUMBNAIL DESIGN PORTFOLIO"
                    />

                    <div className={styles.section_2}>
                        <div className={styles.section_2_description}>
                            <h3 className={styles.h2}>My Process</h3>
                            <p className={styles.p}>
                                Usually, I come up with three thumbnail designs for a stream or a video that appeals and engages viewers, new and old!
                                With Youtube's A/B testing, I strive to create different designs that are strong and summarize the video well, along with 
                                title proposals that check off all SEO boxes and is approved by the client beforehand.
                            </p>
                            <p className={styles.p}>
                                The programs I use for my thumbnail designs include Procreate, for my artwork, and Affinity/Photoshop for the final effects 
                                and edits to make everything look clean and attention-grabbing!
                            </p>
                        </div>
                        <div className={styles.section_2_image}>
                            <Image
                                className={styles.img}
                                src={DesignSketch1.src}
                                width={1280}
                                height={720}
                                alt="Sketch Concepts for a JuNyx Resource Stream"
                            />
                        </div>
                    </div>

                    <div className={styles.section_2_alt}>
                        <div className={styles.section_2_image}>
                            <Image
                                className={styles.img}
                                src={JuNyxBanner.src}
                                width={1918}
                                height={1078}
                                alt="Starting Soon Screen for JuNyx Streams"
                            />
                        </div>
                        <div className={styles.section_2_description}>
                            <h3 className={styles.h2}>JuNyx | Nyxus Vivyd</h3>
                            <p className={styles.p}>
                                80% of my thumbnail design portfolio! Nyxus Vivyd, the streamer, focuses on light-hearted and comedic streams and gameplay.
                                Having watched his streams before, I have gotten a good sense of his and his audience's humor to apply it into how I design
                                these wacky and fun thumbnails.
                            </p>
                            <p className={styles.p}>
                                On the other side, he also has a long-running Minecraft modpack playthrough that he plays with his friend, Junsie. Most of these
                                thumbnails revolve around their series and what shenanigans they get themselves into!
                            </p>
                        </div>
                    </div>

                    <div className={styles.section_2}>
                        <div className={styles.section_2_description}>
                            <h3 className={styles.h2}>INFINITUM</h3>
                            <p className={styles.p}>
                                These are small side works I do for a DnD campaign with my friends! What started out as small recordings turned into an archive
                                of past sessions that feel like authentic Youtube videos with great and quirky thumbnails.
                            </p>
                            <p className={styles.p}>
                                The videos are archived for personal use between me and my friends, but I truly love making and sharing these funny little thumbnails around.
                            </p>
                        </div>
                        <div className={styles.section_2_image}>
                            <Image
                                className={styles.img}
                                src={InfinitumExample.src}
                                width={1280}
                                height={720}
                                alt="Example of a thumbnail for my DnD Campaign Infinitum"
                            />
                        </div>
                    </div>

                    <GraphicDesignGallery images={images} />

                    <div className={styles.bottomnav}>
                        <button
                            className={styles.button}
                            onClick={() => router.push('/gallery-digitalart')}
                        >
                            Illustration Portfolio
                        </button>
                    </div>
                    <div className={styles.bottomnav}>
                        <button
                            className={styles.button}
                            onClick={() => router.push('/gallery-graphicdesign')}
                        >
                            Graphic Design Portfolio
                        </button>
                    </div>
                    <Footer />
                </div>
            </main>

        </div>
    );

}