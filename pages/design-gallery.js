import React from 'react'
import EmblaCarousel from '../src/assets/emblacarouseldesign'
import Head from 'next/head';
import styles from '../styles/designgallery.module.css';
import Image from 'next/image';
import Link from "next/link";
import Logo from '../src/assets/images/icons/Logo.png';
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
                                            <li><Link className={styles.menu__item} href="./contact-page">Contact</Link></li>
                                            <li><Link className={styles.menu__item} href="./resume-page">Resume</Link></li>
                                        </ul>


                                    </div>

                                    <li><Link className={styles.nav_item} href="/">Home</Link></li>
                                    <li><Link className={styles.nav_item} href="./blog">Blog</Link></li>
                                    <li><Link className={styles.nav_item_active} href="#">Design</Link></li>
                                    <li><Link className={styles.nav_item} href="./comics-page">Comics</Link></li>
                                    <li><Link className={styles.nav_item} href="./about">About</Link></li>
                                    <li><Link className={styles.nav_item} href="./contact-page">Contact</Link></li>
                                    <li><Link className={styles.nav_item} href="./resume-page">Resume</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className={styles.banner}>
                            <p className={styles.h1}>DESIGN GALLERY</p>
                        </div>
                    </header>


                    <div className={styles.section_1}>
                        <h2 className={styles.h2}>MY RECENT ARTWORKS!</h2>
                        <div className={styles.gallery_container}>

                            <EmblaCarousel>
                            </EmblaCarousel>
                        </div>
                    </div>
                    <div className={styles.section_2_header}>
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
                    </div>


                    <footer className={styles.footer}>
                        <ul className={styles.socialnav}>
                            <li>
                                <a href="https://www.instagram.com/starro_art_/">
                                    <Image
                                        src={Instagram.src}
                                        width={30}
                                        height={30}
                                        alt="Instagram"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/starro_art_">
                                    <Image
                                        src={X.src}
                                        width={30}
                                        height={30}
                                        alt="Twitter - X"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@nerdneckdoez209">
                                    <Image
                                        src={Youtube.src}
                                        width={30}
                                        height={30}
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

