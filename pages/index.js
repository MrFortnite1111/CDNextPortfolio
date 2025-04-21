import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Header from '../src/components/global/Header';
import bannerImg from '../public/images/banners/void.jpg';
import styles from '../styles/styles.module.css';
import Image from 'next/image';
import Carousel from "../src/assets/emblacarousel";
import ATanIntro from "../public/images/about-me/aarontan-intro.jpg";
import BlogPromo from "../public/images/main/blog-promo.jpg";
import BygoneLandsCover from '../public/images/comic-covers/bygonelands-cover.png';
import FlourishingTwilightCover from '../public/images/comic-covers/flourishingtwilight-cover.png';
import Footer from '../src/components/global/Footer';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useRouter } from 'next/router';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const router = useRouter();
    const mainRef = useRef();
    const imageRefs = useRef([]);
    const titleRefs = useRef([]);
    const paraRefs = useRef([]);
    const actionRefs = useRef([]);

    const setRef = (ref, element) => {
        ref.current.push(element);
    }

    useGSAP(
        () => {
            imageRefs?.current?.forEach((img) => {
                gsap.from(img, {
                    x: -500,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: img,
                        start: 'top bottom',
                        end: 'top 70%',
                        scrub: true,
                    },
                });
            })

            titleRefs?.current?.forEach((title) => {
                gsap.from(title, {
                    y: -100,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: title,
                        start: 'top bottom',
                        end: 'top 70%',
                        scrub: true,
                    },
                });
            });

            paraRefs?.current?.forEach((para) => {
                gsap.from(para, {
                    x: 200,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: para,
                        start: 'top bottom',
                        end: 'top 70%',
                        scrub: true,
                    },
                });
            });

            actionRefs?.current?.forEach((action) => {
                gsap.from(action, {
                    y: 100,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: action,
                        start: 'top bottom',
                        end: 'top 80%',
                        scrub: true,
                    },
                });
            })

        },
        { scope: mainRef }
    );

    return (
        <div className={styles.container}>
            <Head>
                <title>Cosmic Designs | Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main ref={mainRef} className={styles.body}>
                <div className={styles.container}>
                    <Header
                        bannerImage={bannerImg.src}
                        title="COSMIC DESIGN"
                    />

                    <div className={styles.section_1}>
                        <h2 className={styles.h2}>Welcome!</h2>
                        <h3 className={styles.h3}>Check out some of my proudest works!</h3>


                        <div className={styles.gallery_container}>

                            <Carousel>
                            </Carousel>

                        </div>

                        <div className={styles.button_container}>
                            <button className={styles.button} onClick={() => router.push('/design-directory')}>
                                MY PORTFOLIO GALLERY
                            </button>
                        </div>
                    </div>

                    <div className={styles.section_2}>
                        <div className={styles.section_2_image}>
                            <Image
                                ref={(e) => setRef(imageRefs, e)}
                                className={styles.img}
                                src={ATanIntro.src}
                                width={1300}
                                height={1300}
                                alt="Aaron Tan"
                            />
                        </div>
                        <div className={styles.section_2_description}>
                            <h3 className={styles.h2} ref={(e) => setRef(titleRefs, e)}>WOAH! Who's that Guy?</h3>
                            <p className={styles.p} ref={(e) => setRef(paraRefs, e)}>
                                Greetings! The name's Aaron Tan, and I'm an aspiring graphic designer and graphic novelist/illustrator
                                who has a passion for crafting creative designs and illustrations with some carefully curated skills and techniques
                                from art classes and independently learning on my spare time.
                            </p>
                            <p className={styles.p} ref={(e) => setRef(paraRefs, e)}>
                                I am a part of the NIC GDES Program and will be graduating with an associates in Graphic and Web Design.
                            </p>
                            <div className={styles.button_container} ref={(e) => setRef(actionRefs, e)}>
                                <button className={styles.button} onClick={() => router.push('/about')}>
                                    More About Me
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.section_2}>
                        <div className={styles.section_2_description}>
                            <h3 className={styles.h2} ref={(e) => setRef(titleRefs, e)}>Blog Promo!</h3>
                            <p className={styles.p} ref={(e) => setRef(paraRefs, e)}>
                                While I'm trying to keep my social media posts on my platforms short and concise today, 
                                my blog is a great way to learn more about my processes and decisions when designing my projects.
                            </p>
                            <p className={styles.p} ref={(e) => setRef(paraRefs, e)}>
                                Sometimes, there will be other blog posts talking about just fun personal stuff or looking back on my art
                                journey, but the Blog Page is a great way to learn about me as an artist and a graphic designer!
                            </p>
                            <div className={styles.button_container} ref={(e) => setRef(actionRefs, e)}>
                                <button className={styles.button} onClick={() => router.push('/blog')}>
                                    Check Out My Blog!
                                </button>
                            </div>
                        </div>
                        <div className={styles.section_2_image}>
                            <Image
                                ref={(e) => setRef(imageRefs, e)}
                                className={styles.img}
                                src={BlogPromo.src}
                                width={1300}
                                height={1300}
                                alt="Promo Image for My Blog"
                            />
                        </div>
                    </div>

                    <div className={styles.section_2_header}>
                        <h2 className={styles.h2}>My Comics</h2>
                    </div>

                    <div className={styles.section_2}>
                        <div className={styles.section_2_image}>
                            <Image
                                ref={(e) => setRef(imageRefs, e)}
                                className={styles.img}
                                src={BygoneLandsCover.src}
                                width={1800}
                                height={2500}
                                alt="Bygone Lands Cover"
                            />
                        </div>

                        <div className={styles.section_2_description}>
                            <h3 className={styles.h3} ref={(e) => setRef(titleRefs, e)}>Bygone Lands</h3>
                            <hr className={styles.hr} />
                            <p className={styles.p} ref={(e) => setRef(paraRefs, e)}>
                                Bygone lands is a passion project of mine that has been in the works for a while now.
                                It is a fantasy and adventure graphic novel series that is about discovery and exploration.
                            </p>
                            <p className={styles.p} ref={(e) => setRef(paraRefs, e)}>
                                Mark and Tracy attend the annual Sky Festival and meet up with their group of friends,
                                until suddenly, they get sucked into a portal gateway into another dimension of mysteries
                                and secrets. Join them as they explore and uncover the mystery lurking in the archaic Bygone Lands!
                            </p>
                            <div className={styles.button_container} ref={(e) => setRef(actionRefs, e)}>
                                <button className={styles.button} onClick={() => router.push('/comics-page#paper-adventures')}>
                                    More Info
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.section_2}>
                        <div className={styles.section_2_image}>
                            <Image
                                ref={(e) => setRef(imageRefs, e)}
                                className={styles.img}
                                src={FlourishingTwilightCover.src}
                                width={1650}
                                height={2200}
                                alt="Flourishing Twilight Cover"
                            />
                        </div>

                        <div className={styles.section_2_description}>
                            <h3 className={styles.h3} ref={(e) => setRef(titleRefs, e)}>Flourishing Twilight</h3>
                            <hr className={styles.hr} />
                            <p className={styles.p} ref={(e) => setRef(paraRefs, e)}>
                                A couple of instructors take their days off at a lovely beach, until they discovered something
                                otherworldly arise from the ocean! Join these three travelers on their journey towards the
                                Twilight Zone as they learn about the inhabitants and the environment!
                            </p>
                            <div className={styles.button_container} ref={(e) => setRef(actionRefs, e)}>
                                <button className={styles.button} onClick={() => router.push('/comics-page#flourishing-twilight')}>
                                    More Info
                                </button>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>

            </main >

        </div >
    );
}

