import { useEffect, useRef } from 'react';
import Head from 'next/head';
import styles from '../styles/styles.module.css';
import Image from 'next/image';
import Link from "next/link";
import Logo from '../src/assets/images/icons/Logo.png';
import Carousel from "../src/assets/emblacarousel";
import BygoneLandsCover from '../src/assets/images/comic-covers/bygonelands-cover.png';
import FlourishingTwilightCover from '../src/assets/images/comic-covers/flourishingtwilight-cover.png';
import ContactForm from "../src/components/global/ContactForm";
import Greetings from "../src/assets/images/blog-images/intro.png";
import Instagram from '../src/assets/images/icons/Instagram_Icon.svg';
import X from '../src/assets/images/icons/Twitter_Icon.svg';
import Youtube from '../src/assets/images/icons/Youtube_Icon.svg';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
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
                    <header className={styles.header_container}>
                        <div className={styles.header}>
                            <div className={styles.logo}>
                                <Link href="/">
                                    <Image
                                        className={styles.img}
                                        src={Logo.src}
                                        width={100}
                                        height={20}
                                        alt="logo"
                                    />
                                </Link>
                            </div>
                            <nav className={styles.nav}>
                                <ul>
                                    <div className={styles.hamburgermenu}>
                                        <input id="menu-toggle" className={styles.menu__toggle} type="checkbox" />
                                        <label className={styles.menu__btn} for={"menu-toggle"}>
                                            <span></span>
                                        </label>

                                        <ul className={styles.menu__box}>
                                            <li><Link className={styles.menu__item_active} href="/">Home</Link></li>
                                            <li><Link className={styles.menu__item} href="/blog">Blog</Link></li>
                                            <li><Link className={styles.menu__item} href="/design-gallery">Design</Link></li>
                                            <li><Link className={styles.menu__item} href="/comics-page">Comics</Link></li>
                                            <li><Link className={styles.menu__item} href="/about">About</Link></li>
                                            <li><Link className={styles.menu__item} href="/aaron-tans-resume.pdf" locale={false} target='_blank'>Resume</Link></li>
                                        </ul>


                                    </div>

                                    <li><Link className={styles.nav_item_active} href="/">Home</Link></li>
                                    <li><Link className={styles.nav_item} href="/blog">Blog</Link></li>
                                    <li><Link className={styles.nav_item} href="/design-gallery">Design</Link></li>
                                    <li><Link className={styles.nav_item} href="/comics-page">Comics</Link></li>
                                    <li><Link className={styles.nav_item} href="/about">About</Link></li>
                                    <li><Link className={styles.nav_item} href="/aaron-tans-resume.pdf" locale={false} target='_blank'>Resume</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className={styles.banner}>
                            <p className={styles.h1}>DESIGN PORTFOLIO</p>
                        </div>
                    </header>

                    <div className={styles.section_1}>
                        <h2 className={styles.h2}>Welcome!</h2>
                        <h3 className={styles.h3}>Feel free to check out my works!</h3>


                        <div className={styles.gallery_container}>

                            <Carousel>
                            </Carousel>

                        </div>

                        <div className={styles.button_container}>
                            <a className={styles.button} href="/design-gallery">See More Projects</a>
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
                                It begins with a couple of students learning about myths and stories of an ancient and secret world.
                                With this information, they find and reenact the process to open the portal again.
                                However, they instead got dragged into an abandoned world of ruins and must uncover the
                                secrets of this otherworldly land.
                            </p>
                            <div className={styles.button_container} ref={(e) => setRef(actionRefs, e)}>
                                <a className={styles.button} href="/comics-page#paper-adventures">More Info</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.section_2}>
                        <div className={styles.section_2_image}>
                            <Image
                                ref={(e) => setRef(imageRefs, e)}
                                className={styles.img}
                                src={FlourishingTwilightCover.src}
                                width={1500}
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
                                Twilight
                                Zone as they learn about the inhabitants and the environment!
                            </p>
                            <div className={styles.button_container} ref={(e) => setRef(actionRefs, e)}>
                                <a className={styles.button} href="/comics-page#flourishing-twilight">More Info</a>
                            </div>
                        </div>
                    </div>

                    <footer className={styles.footer}>
                        <div className={styles.footer_text}>
                            <p className={styles.p}>
                                If you have any questions about my work, commissions, and potential to buy my artwork,
                                please contact me by filling out this form! Please and thank you!
                            </p>
                            <p className={styles.p}>
                                If you wish to contact me directly or the form doesn't work, contact me
                                through my <a href="mailto:cosmicdesigns979@gmail.com">email</a> please!
                            </p>
                        </div>

                        <div className={styles.footer_contact}>

                            <ContactForm />

                            <div className={styles.footer_image}>
                                <Image

                                    src={Greetings.src}
                                    width={300}
                                    height={300}
                                    alt="Greeting Photo"
                                />
                            </div>

                        </div>

                        <ul className={styles.socialnav}>
                            <li>
                                <a href="https://www.instagram.com/starro_art_/" target="_blank">
                                    <Image
                                        src={Instagram.src}
                                        width={40}
                                        height={40}
                                        alt="Instagram"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/starro_art_" target="_blank">
                                    <Image
                                        src={X.src}
                                        width={40}
                                        height={40}
                                        alt="Twitter - X"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@nerdneckdoez209" target="_blank">
                                    <Image
                                        src={Youtube.src}
                                        width={40}
                                        height={40}
                                        alt="Youtube"
                                    />
                                </a>
                            </li>
                        </ul>
                    </footer>
                </div>

            </main >

        </div >
    );
}

