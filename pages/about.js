import Head from 'next/head';
import Header from '../src/components/global/Header';
import bannerImg from '../src/assets/images/banner-images/itsame.jpg';
import styles from '../styles/about.module.css';
import Image from 'next/image';
import ATan from "../src/assets/images/aboutme-images/aaron-tan.png";
import ATanGallery from "../src/assets/images/aboutme-images/aaron-exhibition.jpg";
import Footer from '../src/components/global/Footer';


export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Cosmic Designs | About Me</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.body}>
                <div className={styles.container}>
                    <Header
                        bannerImage={bannerImg.src}
                        title="DESIGN GALLERY"
                    />

                    <div className={styles.section_2}>
                        <div className={styles.section_2_image}>
                            <Image
                                className={styles.img}
                                src={ATan.src}
                                width={2000}
                                height={2000}
                                alt="Aaron Tan"
                            />
                            <Image
                                className={styles.img}
                                src={ATanGallery.src}
                                width={2000}
                                height={2000}
                                alt="Aaron at the Exhibition Gallery"
                            />
                        </div>

                        <div className={styles.section_2_description}>
                            <h2 className={styles.h2}>Hi! My name's Aaron Tan!</h2>
                            <hr className={styles.hr} />
                            <p className={styles.p}>
                                Growing up reading comics and drawing silly little characters, Aaron Tan sets his eyes on
                                pursuing the career of illustrating comics and designing characters. He is mainly a self-taught
                                artist who finds ways to improve his art everyday. Aaron is currently pursuing his Associates in
                                Graphic and Web Design, to help others with his skills and works. He has also taken Comics as
                                Literature to understand the structure of comics.
                            </p>
                            <p className={styles.p}>
                                Aaron usually draws many characters and art projects traditionally and digitally. He is
                                reworking on his comic called, "Paper Adventures", to make it a lot more accessible to the
                                public. Many of his works can be found on his social media platforms.
                            </p>
                        </div>
                    </div>


                    <Footer />

                </div>
            </main >
        </div >
    );
}

