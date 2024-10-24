import Head from 'next/head';
import styles from '../styles/blog.module.css';
import Image from 'next/image';
import Link from "next/link";
import Logo from '../src/assets/images/icons/Logo.png';
import DivPowSketch from '../src/assets/images/blog-images/progress-divinepower.png';
import BeWitched from '../src/assets/images/blog-images/bewitched.png';
import WitchSketch from '../src/assets/images/blog-images/progress-witch.png';
import Intro from '../src/assets/images/blog-images/intro.png';
import ContactForm from "../src/components/global/ContactForm";
import Greetings from "../src/assets/images/blog-images/intro.png";
import Instagram from '../src/assets/images/icons/Instagram_Icon.svg';
import X from '../src/assets/images/icons/Twitter_Icon.svg';
import Youtube from '../src/assets/images/icons/Youtube_Icon.svg';


export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Cosmic Designs | Blog - Page 2</title>
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
                                            <li><Link className={styles.menu__item_active} href="#">Blog</Link></li>
                                            <li><Link className={styles.menu__item} href="./design-gallery">Design</Link></li>
                                            <li><Link className={styles.menu__item} href="./comics-page">Comics</Link></li>
                                            <li><Link className={styles.menu__item} href="./about">About</Link></li>
                                            <li><Link className={styles.menu__item} href="/aaron-tans-resume.pdf" locale={false} target='_blank'>Resume</Link></li>
                                        </ul>


                                    </div>

                                    <li><Link className={styles.nav_item} href="/">Home</Link></li>
                                    <li><Link className={styles.nav_item_active} href="#">Blog</Link></li>
                                    <li><Link className={styles.nav_item} href="/design-gallery">Design</Link></li>
                                    <li><Link className={styles.nav_item} href="./comics-page">Comics</Link></li>
                                    <li><Link className={styles.nav_item} href="./about">About</Link></li>
                                    <li><Link className={styles.nav_item} href="/aaron-tans-resume.pdf" locale={false} target='_blank'>Resume</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div class={styles.banner}>
                            <p className={styles.h1}>BLOG</p>
                        </div>
                    </header>

                    <div className={styles.blog_section}>
                        <div className={styles.blog_post}>
                            <div className={styles.blog_header}>
                                <h3 className={styles.h3}>Progress Log 1: "Divine Power!"</h3>
                                <p className={styles.p}><time datetime="2023-09-12">9/12/23</time></p>
                            </div>
                            <div className={styles.blog_info}>
                                <div className={styles.blog_img}>
                                    <Image
                                        className={styles.img}
                                        src={DivPowSketch.src}
                                        width={1000}
                                        height={1700}
                                        alt="Divine Power Progress"
                                    />
                                </div>
                                <div className={styles.blog_description}>
                                    <p className={styles.p}>
                                        Good day, folks! It's been a while, hasn't it? Most of my time has been going into
                                        reworking on a design that has been in the shelves for a while now. Not much has
                                        changed
                                        this delightful warrior's heart, so it's time to give him one more introduction!
                                    </p>
                                    <p className={styles.p}>
                                        Grazing the untamed lands and dirt roads, Harberd the Divine is a traveling paladin
                                        who
                                        seeks to share the holy word through glory of battle. Wielding his trusty halberd
                                        and
                                        his heart, painted with glossy gold, nothing can stop this warrior's boisterous
                                        spirit!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.blog_section}>
                        <div className={styles.blog_post}>
                            <div className={styles.blog_header}>
                                <h3 className={styles.h3}>BeWitched: Cataclysmic Surge</h3>
                                <p className={styles.p}><time datetime="2023-09-06">9/6/23</time></p>
                            </div>
                            <div className={styles.blog_info}>
                                <div className={styles.blog_img}>
                                    <Image
                                        className={styles.img}
                                        src={BeWitched.src}
                                        width={1500}
                                        height={2200}
                                        alt="BeWitched"
                                    />
                                </div>
                                <div className={styles.blog_description}>
                                    <p className={styles.p}>
                                        Good evening, everyone! Apologies for not keeping up with my progress on my latest
                                        artwork, but here's the final results of my new artwork! I'm really glad with how this
                                        turned out, it makes me happy to see how my art has come this far. I'm happy with how
                                        the colors and the rendering came together nicely to form a beautiful display, really
                                        lived up to how I pictured it in my head!
                                    </p>
                                    <p className={styles.p}>
                                        Introducing Marsha, the Ivy Queen! A lone bard who creates chaos wherever she plays, she
                                        is one trouble maker who carries outstanding performances to the masses. She usually
                                        performs by conjuring up an instrument through her spells and playing as she pleases.
                                    </p>
                                    <p className={styles.p}>
                                        It's not known how she causes chaos in each performance, but many have seen a bloom of
                                        darkness spreading across the sky during her performances. Though an outcast due to her
                                        sorcery origins, she steals the hearts of those who love her shows!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.blog_section}>
                        <div className={styles.blog_post}>
                            <div className={styles.blog_header}>
                                <h3 className={styles.h3}>Progress Log 1: "Bewitched! / Placeholder Title"</h3>
                                <p className={styles.p}><time datetime="2023-08-26">8/26/23</time></p>
                            </div>
                            <div className={styles.blog_info}>
                                <div className={styles.blog_img}>
                                    <Image
                                        className={styles.img}
                                        src={WitchSketch.src}
                                        width={1100}
                                        height={1800}
                                        alt="BeWitched Progress"
                                    />
                                </div>
                                <div className={styles.blog_description}>
                                    <p className={styles.p}>
                                        Good evening, welcome back to my art blog! There isn't much I would like to discuss
                                        further about, but here's my progress on my current artwork so far! This was more of a
                                        little idea that popped up in my head and thought it would be cool to see in one of my
                                        stories.
                                    </p>
                                    <p className={styles.p}>
                                        A sorceress bard who travels to different towns to stir up the crowds in a mosh pit like
                                        concert. I definitely enjoy seeing where this current artwork is heading, so make sure
                                        to keep an eye out for more progress logs like these! Have a good evening, everyone!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.blog_section}>
                        <div className={styles.blog_post}>
                            <div className={styles.blog_header}>
                                <h3 className={styles.h3}>Hi Hi Hi!!</h3>
                                <p className={styles.p}><time datetime="2023-08-24">8/24/23</time></p>
                            </div>
                            <div className={styles.blog_info}>
                                <div className={styles.blog_img}>
                                    <Image
                                        className={styles.img}
                                        src={Intro.src}
                                        width={2000}
                                        height={2000}
                                        alt="Hi Hi Hi!"
                                    />
                                </div>
                                <div className={styles.blog_description}>
                                    <p className={styles.p}>
                                        Hey there, folks! Welcome to my very own art blog! I've decided to make this blog
                                        a thing since I've never really discussed a lot about my art, huh? Here, you can
                                        read about all of the cool little details, processes, and an in depth look into
                                        the artworks I've made across the years! I'll also make little doodles on the side
                                        just for the fun of it if you aren't interested in what I have to say! Anyways,
                                        stay tuned for more cool info on my next art project!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.blognav}>
                            <ul>
                                <li><Link href="./blog" >1</Link></li>
                                <li><Link href="#" className={styles.active}>2</Link></li>
                            </ul>
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

