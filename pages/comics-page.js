import Head from 'next/head';
import Header from '../src/components/global/Header';
import bannerImg from '../src/assets/images/banner-images/comic-panel.jpg';
import styles from '../styles/styles.module.css';
import Image from 'next/image';
import Link from "next/link";
import BygoneLandsCover from '../src/assets/images/comic-covers/bygonelands-cover.png';
import FlourishingTwilightCover from '../src/assets/images/comic-covers/flourishingtwilight-cover.png';
import Footer from '../src/components/global/Footer';


export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Cosmic Designs | Comics</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.body}>
                <div className={styles.container}>
                    <Header
                        bannerImage={bannerImg.src}
                        title="COMICS"
                    />

                    <div id="bygone-lands">
                        <div className={styles.section_2_alt}>
                            <div className={styles.section_2_image}>
                                <Image
                                    className={styles.img}
                                    src={BygoneLandsCover.src}
                                    width={1500}
                                    height={2000}
                                    alt="Bygone Lands Cover"
                                />
                            </div>

                            <div className={styles.section_2_description}>
                                <h2 className={styles.comics_h2}>Bygone Lands</h2>
                                <hr className={styles.hr} />
                                <p className={styles.p}>
                                    Mark and Tracy attend the annual Sky Festival and meet up with their group of friends,
                                    until suddenly, they get sucked into a portal gateway into another dimension of mysteries
                                    and secrets. Join them as they explore and uncover the mystery lurking in the archaic Bygone Lands!
                                </p>
                                <div className={styles.button_container}>
                                    <a className={styles.button_alt_active}
                                        target='blank'
                                        href="/bygonelands-chapter1demo.pdf">Preview</a>
                                </div>
                                <hr className={styles.hr} />
                                <h3 className={styles.h3}>Full Comic Coming Soon!</h3>
                                <div className={styles.button_container}>
                                    <a className={styles.button_alt}>Coming Soon</a>
                                </div>
                            </div>
                        </div>

                        <div id="flourishing-twilight">
                            <div className={styles.section_2}>
                                <div className={styles.section_2_image}>
                                    <Image
                                        className={styles.img}
                                        src={FlourishingTwilightCover.src}
                                        width={1400}
                                        height={2200}
                                        alt="Flourishing Twilight Cover"
                                    />
                                </div>

                                <div className={styles.section_2_description}>
                                    <h2 className={styles.comics_h2}>Flourishing Twilight</h2>
                                    <hr className={styles.hr} />
                                    <p className={styles.p}>
                                        A couple of instructors take their days off at a lovely beach, until they discovered
                                        something
                                        otherworldly arise from the ocean! Join these three travelers on their journey towards the
                                        Twilight
                                        Zone as they learn about the inhabitants and the environment!
                                    </p>
                                    <div className={styles.button_container}>
                                        <a className={styles.button}
                                            target='blank'
                                            href="/flourishingtwilight.pdf"
                                            locale={false}>Read
                                            Now!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <Footer />

                </div>
            </main >
        </div >
    );
}

