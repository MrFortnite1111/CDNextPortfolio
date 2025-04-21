import Head from 'next/head';
import Header from '../src/components/global/Header';
import bannerImg from '../public/images/banners/starro1.jpg';
import styles from '../styles/styles.module.css';
import Image from 'next/image';
import ATan from "../public/images/about-me/aarontan-profile.jpg";
import ATan2 from "../public/images/about-me/aaron-bfast.jpg";
import ATan3 from "../public/images/about-me/aaron-fountain.jpg";
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
                        title="ABOUT ME"
                    />

                    <div className={styles.section_2}>
                        <div className={styles.about_images}>
                            <Image
                                className={styles.img}
                                src={ATan.src}
                                width={2500}
                                height={2500}
                                alt="Aaron Tan Main"
                            />
                            <Image
                                className={styles.img}
                                src={ATan2.src}
                                width={2500}
                                height={2500}
                                alt="Aaron Tan hanging out with friends for breakfast"
                            />
                            <Image
                                className={styles.img}
                                src={ATan3.src}
                                width={2500}
                                height={2500}
                                alt="Aaron Tan getting some water"
                            />
                        </div>

                        <div className={styles.section_2_description}>
                            <h2 className={styles.h2}>Hi! Greetings! Welcome!!</h2>
                            <hr className={styles.hr} />
                            <p className={styles.p}>
                                Growing up in Kuala Lumpur, Malaysia, and developing his passion for creative designs
                                by reading fun little comics, Aaron Tan is a soul-driven and enthusiastic designer settled
                                in Coeur d'Alene, Idaho. He specializes in graphic/web design, user experience, character
                                designs and illustrations, and creative writing. His eye for intricate details and careful
                                planning help his designs stand out as bold and meaningful visions of art.
                            </p>
                            <p className={styles.p}>
                                Aaron Tan is finishing up his Associates in Graphic and Web Design at North Idaho College and 
                                has developed his skills in collaboration, team leadership, and taking initiative on open opportunities. 
                                He continues to boost his creative mindset and is eager to set out into the world and use his newly 
                                equipped skill set to help others achieve their creative visions and the need for stand-out designs among competitors.
                            </p>
                            <p className={styles.p}>
                            When Aaron has some spare time, he usually winds down with writing down fun little stories for his carefully crafted characters, 
                            taking long bike rides to the community-driven downtown of Coeur d'Alene, and spending countless hours on his Stardew Valley save file.
                            </p>
                            <div className={styles.button_container}>
                                <a className={styles.button} href="/aarontans-resume-2025.pdf" target='_blank' >My Resume</a>
                            </div>
                        </div>
                    </div>


                    <Footer />

                </div>
            </main >
        </div >
    );
}

