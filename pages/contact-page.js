import Head from 'next/head';
import styles from '../styles/contact.module.css';
import Image from 'next/image';
import Link from "next/link";
import Logo from '../src/assets/images/icons/Logo.png';
import Greetings from "../src/assets/images/blog-images/intro.png";
import ContactForm from "../src/components/global/ContactForm";
import Instagram from '../src/assets/images/icons/Instagram_Icon.svg';
import X from '../src/assets/images/icons/Twitter_Icon.svg';
import Youtube from '../src/assets/images/icons/Youtube_Icon.svg';


export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Cosmic Designs | Contact</title>
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
                                            <li><Link className={styles.menu__item} href="./comics-page">Comics</Link></li>
                                            <li><Link className={styles.menu__item} href="./about">About</Link></li>
                                            <li><Link className={styles.menu__item_active} href="#">Contact</Link></li>
                                            <li><Link className={styles.menu__item} href="./resume-page">Resume</Link></li>
                                        </ul>


                                    </div>

                                    <li><Link className={styles.nav_item} href="/">Home</Link></li>
                                    <li><Link className={styles.nav_item} href="./blog">Blog</Link></li>
                                    <li><Link className={styles.nav_item} href="./design-gallery">Design</Link></li>
                                    <li><Link className={styles.nav_item} href="./comics-page">Comics</Link></li>
                                    <li><Link className={styles.nav_item} href="./about">About</Link></li>
                                    <li><Link className={styles.nav_item_active} href="#">Contact</Link></li>
                                    <li><Link className={styles.nav_item} href="./resume-page">Resume</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className={styles.banner}>
                            <p className={styles.h1}>CONTACT</p>
                        </div>
                    </header>

                    <div className={styles.section_2}>
                        <div className={styles.contact_form}>
                            <div className={styles.section_2_description}>
                                <p className={styles.p}>
                                    If you have any questions about my work, commissions, and potential to buy my artwork,
                                    please contact me by filling out this form! Please and thank you!
                                </p>
                                <p className={styles.p}>
                                    If you wish to contact me directly or the form doesn't work, contact me
                                    through my <a href="mailto:atan8379@gmail.com">email</a> please!
                                </p>

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

            </main>
        </div >
    );
}

