import Head from 'next/head';
import styles from '../styles/about.module.css';
import Image from 'next/image';
import Link from "next/link";
import Logo from '../src/assets/images/icons/Logo.png';
import ATan from "../src/assets/images/aboutme-images/aaron-tan.png";
import ATanGallery from "../src/assets/images/aboutme-images/aaron-exhibition.jpg";
import ContactForm from "../src/components/global/ContactForm";
import Greetings from "../src/assets/images/blog-images/intro.png";
import Instagram from '../src/assets/images/icons/Instagram_Icon.svg';
import X from '../src/assets/images/icons/Twitter_Icon.svg';
import Youtube from '../src/assets/images/icons/Youtube_Icon.svg';


export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Cosmic Designs | About Me</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.body}>
                <div className={styles.container}>
                    <header className={styles.header_container}>
                        <div className={styles.header}>
                            <div className={styles.logo}>
                                <Link className={styles.logo_link} href="/">
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
                                            <li><Link className={styles.menu__item_active} href="#">About</Link></li>
                                            <li><Link className={styles.menu__item} href="/aaron-tans-resume.pdf" locale={false} target='_blank'>Resume</Link></li>
                                        </ul>


                                    </div>

                                    <li><Link className={styles.nav_item} href="/">Home</Link></li>
                                    <li><Link className={styles.nav_item} href="./blog">Blog</Link></li>
                                    <li><Link className={styles.nav_item} href="/design-gallery">Design</Link></li>
                                    <li><Link className={styles.nav_item} href="./comics-page">Comics</Link></li>
                                    <li><Link className={styles.nav_item_active} href="#">About</Link></li>
                                    <li><Link className={styles.nav_item} href="/aaron-tans-resume.pdf" locale={false} target='_blank'>Resume</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className={styles.banner}>
                            <p className={styles.h1}>ABOUT ME</p>
                        </div>
                    </header>

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

