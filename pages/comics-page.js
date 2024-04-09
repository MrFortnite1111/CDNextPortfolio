import Head from 'next/head';
import styles from '../styles/comics.module.css';
import Image from 'next/image';
import Link from "next/link";
import Logo from '../images/icons/Logo.png';
import BygoneLandsCover from '../images/comic-covers/Bygone-Lands-Cover.png';
import FlourishingTwilightCover from '../images/comic-covers/flourishing-twilight-cover.png';
import Instagram from '../images/icons/Instagram_Icon.svg';
import X from '../images/icons/Twitter_Icon.svg';
import Youtube from '../images/icons/Youtube_Icon.svg';


export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Cosmic Designs | Comics</title>
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
                                            <li><Link className={styles.menu__item} href="/">Home</Link></li>
                                            <li><Link className={styles.menu__item} href="./blog">Blog</Link></li>
                                            <li><Link className={styles.menu__item} href="./design-gallery">Design</Link></li>
                                            <li><Link className={styles.menu__item_active} href="#">Comics</Link></li>
                                            <li><Link className={styles.menu__item} href="./about">About</Link></li>
                                            <li><Link className={styles.menu__item} href="./contact-page">Contact</Link></li>
                                            <li><Link className={styles.menu__item} href="./resume-page">Resume</Link></li>
                                        </ul>


                                    </div>

                                    <li><Link className={styles.nav_item} href="/">Home</Link></li>
                                    <li><Link className={styles.nav_item} href="./blog">Blog</Link></li>
                                    <li><Link className={styles.nav_item} href="./design-gallery">Design</Link></li>
                                    <li><Link className={styles.nav_item_active} href="#">Comics</Link></li>
                                    <li><Link className={styles.nav_item} href="./about">About</Link></li>
                                    <li><Link className={styles.nav_item} href="./contact-page">Contact</Link></li>
                                    <li><Link className={styles.nav_item} href="./resume-page">Resume</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div class={styles.banner}>
                            <p className={styles.h1}>COMICS</p>
                        </div>
                    </header>

                    <div id="bygone-lands">
                        <div className={styles.section_2}>
                            <div className={styles.section_2_image}>
                                <Image
                                    className={styles.img}
                                    src={BygoneLandsCover.src}
                                    width={1300}
                                    height={2000}
                                    alt="Bygone Lands Cover"
                                />
                            </div>

                            <div className={styles.section_2_description}>
                                <h2 className={styles.h2}>Bygone Lands</h2>
                                <hr className={styles.hr} />
                                <p className={styles.p}>
                                    A group of friends became curious of Cranberry Town's mysterious legends, leading them
                                    towards
                                    an
                                    abandoned portal to an unknown world. Follow along this tale as they are swept away into the
                                    archaic
                                    land of Paperville.
                                </p>
                                <div className={styles.button_container}>
                                    <a className={styles.button_alt_active}
                                        target='blank'
                                        href="../src/comics/Paper-Adventures-Early-Ver.pdf">Preview</a>
                                </div>
                                <hr className={styles.hr} />
                                <h3 className={styles.h3}>Full Comic Coming Soon!</h3>
                                <div className={styles.button_container}>
                                    <a className={styles.button_alt}>Coming Soon</a>
                                </div>
                            </div>
                        </div>

                        <div id="flourishing-twilight">
                            <div className={styles.section_2_alt}>
                                <div className={styles.section_2_image}>
                                    <Image
                                        className={styles.img}
                                        src={FlourishingTwilightCover.src}
                                        width={1500}
                                        height={2200}
                                        alt="Flourishing Twilight Cover"
                                    />
                                </div>

                                <div className={styles.section_2_description}>
                                    <h2 className={styles.h2}>Flourishing Twilight</h2>
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
                                            href="../src/comics/Flourishing-Twilight.pdf">Read
                                            Now!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <footer className={styles.footer}>
                        <ul className={styles.socialnav}>
                            <li>
                                <a href="https://www.instagram.com/starro_art_/">
                                    <Image
                                        src={Instagram.src}
                                        width={35}
                                        height={35}
                                        alt="Instagram"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/starro_art_">
                                    <Image
                                        src={X.src}
                                        width={35}
                                        height={35}
                                        alt="Twitter - X"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@nerdneckdoez209">
                                    <Image
                                        src={Youtube.src}
                                        width={35}
                                        height={35}
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

