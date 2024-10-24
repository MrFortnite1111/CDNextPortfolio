import React from 'react'
import EmblaCarousel from '../src/assets/emblacarouseldesign'
import Head from 'next/head';
import styles from '../styles/designgallery.module.css';
import Image from 'next/image';
import Link from "next/link";
import Logo from '../src/assets/images/icons/Logo.png';
import ContactForm from "../src/components/global/ContactForm";
import Greetings from "../src/assets/images/blog-images/intro.png";
import Instagram from '../src/assets/images/icons/Instagram_Icon.svg';
import X from '../src/assets/images/icons/Twitter_Icon.svg';
import Youtube from '../src/assets/images/icons/Youtube_Icon.svg';



export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Cosmic Designs | Designs</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.body}>
                <div className={styles.container}>
                    <header className={styles.header_container}>
                        <div className={styles.header}>
                            <div className={styles.logo}>
                                <Link href="/">
                                    <Image
                                        className={styles.img}
                                        src={Logo.src}
                                        width={140}
                                        height={39}
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
                                            <li><Link className={styles.menu__item} href="/">Home</Link></li>
                                            <li><Link className={styles.menu__item} href="./blog">Blog</Link></li>
                                            <li><Link className={styles.menu__item_active} href="#">Design</Link></li>
                                            <li><Link className={styles.menu__item} href="./comics-page">Comics</Link></li>
                                            <li><Link className={styles.menu__item} href="./about">About</Link></li>
                                            <li><Link className={styles.menu__item} href="/aaron-tans-resume.pdf" locale={false} target='_blank'>Resume</Link></li>
                                        </ul>


                                    </div>

                                    <li><Link className={styles.nav_item} href="/">Home</Link></li>
                                    <li><Link className={styles.nav_item} href="./blog">Blog</Link></li>
                                    <li><Link className={styles.nav_item_active} href="#">Design</Link></li>
                                    <li><Link className={styles.nav_item} href="./comics-page">Comics</Link></li>
                                    <li><Link className={styles.nav_item} href="./about">About</Link></li>
                                    <li><Link className={styles.nav_item} href="/aaron-tans-resume.pdf" locale={false} target='_blank'>Resume</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className={styles.banner}>
                            <p className={styles.h1}>DESIGN GALLERY</p>
                        </div>
                    </header>


                    <div className={styles.section_1}>
                        <h2 className={styles.h2}>GALLERY SLIDESHOW</h2>
                        <h3 className={styles.h3}>Some of the finest in the galaxy!</h3>
                        <div className={styles.gallery_container}>

                            <EmblaCarousel>
                            </EmblaCarousel>
                        </div>
                    </div>

                    <div className={styles.section_2}>
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
                                <a className={styles.button} href="/comics-page#paper-adventures">Portfolio</a>
                            </div>
                        </div>
                        {/* <div className={styles.section_2_image}>
                            <Image
                                ref={(e) => setRef(imageRefs, e)}
                                className={styles.img}
                                src={BygoneLandsCover.src}
                                width={1800}
                                height={2500}
                                alt="Bygone Lands Cover"
                            />
                        </div> */}
                    </div>

                    {/* Save this to finish later; use NextJS Image Gallery */}

                    {/* <div className={styles.section_2_header}>
                        <h2 className={styles.h2}>ART CATALOGUE</h2>
                    </div>

                    <div className={styles.section_2}>
                        <div className={styles.artlinkcontainer}><a className={styles.artlink} href="Galleries/gallery-2023.html"><h3>2023</h3></a></div>
                        <div className={styles.artlinkcontainer}><a className={styles.artlink} href="Galleries/gallery-2022.html"><h3>2022</h3></a></div>
                    </div>

                    <div className={styles.section_2_header}>
                        <h2 className={styles.h2}>GRAPHIC DESIGN PORTFOLIO</h2>
                    </div>

                    <div className={styles.section_2}>
                        <div className={styles.artlinkcontainer}><a className={styles.artlink} href="Galleries/gallery-gdes.html"><h3>PHOTOSHOP</h3></a></div>
                        <div className={styles.artlinkcontainer}><a className={styles.artlink} href="Galleries/gallery-gdes.html"><h3>ILLUSTRATOR</h3></a></div>
                    </div> */}


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

            </main>

        </div>
    );
}

