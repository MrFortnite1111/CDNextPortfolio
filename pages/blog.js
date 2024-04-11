import Head from 'next/head';
import styles from '../styles/blog.module.css';
import Image from 'next/image';
import Link from "next/link";
import Logo from '../images/icons/Logo.png';
// import ToDoVanillaJS from '../images/blog-images'
// import VanillaJSCode from
// import ToDoNextJS from
// import ReactJSCode from
// import Puqween1 from
// import Puqween2 from
// import Puqween3 from
// import Meatball from
// import DivinePower from
// import DivPowSketch from
import Instagram from '../images/icons/Instagram_Icon.svg';
import X from '../images/icons/Twitter_Icon.svg';
import Youtube from '../images/icons/Youtube_Icon.svg';


export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Cosmic Designs | Blog</title>
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
                                            <li><Link className={styles.menu__item} href="./contact-page">Contact</Link></li>
                                            <li><Link className={styles.menu__item} href="./resume-page">Resume</Link></li>
                                        </ul>


                                    </div>

                                    <li><Link className={styles.nav_item} href="/">Home</Link></li>
                                    <li><Link className={styles.nav_item_active} href="#">Blog</Link></li>
                                    <li><Link className={styles.nav_item} href="/design-gallery">Design</Link></li>
                                    <li><Link className={styles.nav_item} href="./comics-page">Comics</Link></li>
                                    <li><Link className={styles.nav_item} href="./about">About</Link></li>
                                    <li><Link className={styles.nav_item} href="./contact-page">Contact</Link></li>
                                    <li><Link className={styles.nav_item} href="./resume-page">Resume</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div class={styles.banner}>
                            <p className={styles.h1}>MY BLOG!</p>
                        </div>
                    </header>

                    <div className={styles.blog_section}>
                        <div className={styles.blog_post}>
                            <div className={styles.blog_header}>
                                <h3 className={styles.h3}>My Experience with Vanilla JS and React JS</h3>
                                <p className={styles.p}><time datetime="2024-03-12">03/12/23</time></p>
                            </div>
                            <div className={styles.blog_info}>
                                <div className={styles.blog_img}>
                                    <img src="Images/Blog-Images/Vanilla-To-Do.png" alt="To Do App made with Vanilla JS"
                                        width="300px" />
                                    <img src="Images/Blog-Images/Vanilla-JS-Code.png" alt="Vanilla JS Code" width="300px" />
                                    <img src="Images/Blog-Images/React-To-Do.png" alt="To Do App made with React JS"
                                        width="300px" />
                                    <img src="Images/Blog-Images/React-JS-Code.png" alt="React JS Code" width="300px" />
                                </div>
                                <div className={styles.blog_description}>
                                    <p className={styles.p}>
                                        My experience with developing both To-Do apps was quite interesting, realizing the
                                        complexities of both Vanilla JavaScript and React JS are more difficult to understand
                                        when being used to HTML and CSS.
                                    </p>
                                    <p className={styles.p}>
                                        When working with Vanilla JavaScript and React JS separately, I understood that Vanilla
                                        JavaScript is more structurally complex than React JS. The reason for this is that
                                        Vanillas JS needs more lines of code and specific codes that call out a function that
                                        you want to make a feature. React JS, on the other hand, is defined as a JavaScript
                                        library. This means that React JS can use simple lines of code and knows the feature
                                        you're using, making it more organized and structurally simplistic, compared to the more
                                        backbone structured Vanilla JS with infinite variables.
                                    </p>
                                    <p className={styles.p}>
                                        The reusability of components between the two JS software is similar but very different
                                        in how the structure looks. Vanilla JS is able to reuse components, but the code needs
                                        to be made first at the bottom and requires another a line of callout code to reuse such
                                        components. For React JS, the process is similar but the callout is much easier as the
                                        code is more simplistic and easier for the eye to understand, making the code smaller
                                        but carrying the same effect as Vanilla JS would.
                                    </p>
                                    <p className={styles.p}>
                                        When learning and developing with both JavaScript apps, it was still hard to understand
                                        the complex lines of code and implement them into the website. I will admit that React
                                        JS is a little easier to understand once you played around with Vanilla JS, but I only
                                        had to use a template with the React JS code so I can't really say the difference in the
                                        learning curve. However, as I tinker more with these two apps, I'm willing to bet I'll
                                        get a better understanding of the functionality of both.
                                    </p>
                                    <p className={styles.p}>
                                        In the User Interface and User Experience world, React JS definitely is much easier to
                                        read and understand than Vanilla JS, with the more organized code and simple callouts.
                                        React JS is a lot more responsive when editing the code and seeing it updated in real
                                        time, along with their simplistic code.
                                    </p>
                                    <p className={styles.p}>
                                        In short, React JS is more user friendly and design-friendly, but Vanilla JS is
                                        necessary in understanding the implementation of JavaScript on your website.
                                    </p>

                                    <p className={styles.p}><a target="_blank"
                                        href="https://github.com/MrFortnite1111/vanilla-javascript-to-do-app">Vanilla
                                        To-Do</a></p>
                                    <p className={styles.p}><a target="_blank" href="https://github.com/MrFortnite1111/todoreact">React To-Do</a></p>

                                </div>
                            </div>
                        </div>

                        <div className={styles.blog_post}>
                            <div className={styles.blog_header}>
                                <h3 className={styles.h3}>Artworks for an Art Contest!</h3>
                                <p className={styles.p}><time datetime="2023-12-09">12/09/23</time></p>
                            </div>
                            <div className={styles.blog_info}>
                                <div className={styles.blog_img}>
                                    <img src="Images/Blog-Images/Puqween-1.png" alt="Puqween 1" width="300px" />
                                    <img src="Images/Blog-Images/Puqween-2.png" alt="Puqween 2" width="300px" />
                                    <img src="Images/Blog-Images/Puqween-3.png" alt="Puqween 3" width="300px" />
                                </div>
                                <div className={styles.blog_description}>
                                    <p className={styles.p}>
                                        Good noonin', y'all! Since my finals have eaten away at my soul for quite a while
                                        now,
                                        I decided to take the time to relax and draw some artwork for an online art contest
                                        called Puqween! I had quite a lot of fun drawing their characters and mine in these
                                        illustrations, playing around with the rendering and more color schemes. Again,
                                        I'm super proud of how these all turned out!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.blog_post}>
                            <div className={styles.blog_header}>
                                <h3 className={styles.h3}>Meatball - The Funny Chef</h3>
                                <p className={styles.p}><time datetime="2023-11-17">11/17/23</time></p>
                            </div>
                            <div className={styles.blog_info}>
                                <div className={styles.blog_img}>
                                    <img src="Images/Blog-Images/Meatball.png" alt="Chef Meatball" width="300px" />
                                </div>
                                <div className={styles.blog_description}>
                                    <p className={styles.p}>
                                        Oh wow, it's been a while. Howdy, here's a small doodle I did to get back into
                                        drawing.
                                        I decided I haven't drawn this sweet and funny fellow in quite a while and wanted to
                                        see
                                        how he stands in my modern style! I adore the posing here as it feels more fluid and
                                        an
                                        improvement from my earlier stiff poses. The rendering was also pretty awesome,
                                        good to know that I'm very much improving!
                                    </p>
                                    <p className={styles.p}>
                                        This is Meatball, a fun but dumb fry cook! Once a renowned chef who worked with his
                                        brother, now alone in a taco stand and left in obscurity. In this artwork,
                                        he still shows passion and love when cooking up food for his customers. It's enough
                                        to remind him of the good old days of working professionally with his brother. For
                                        now,
                                        he has to keep up his small business or swim in a sea of debt.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.blog_post}>
                            <div className={styles.blog_header}>
                                <h3 className={styles.h3}>Divine Power</h3>
                                <p className={styles.p}><time datetime="2023-09-16">9/16/23</time></p>
                            </div>
                            <div className={styles.blog_info}>
                                <div className={styles.blog_img}>
                                    <img src="Images/Blog-Images/Divine Power.png" alt="Divine Power" width="300px" />
                                </div>
                                <div className={styles.blog_description}>
                                    <p className={styles.p}>
                                        Good tidings to you all, I bring to you a new art piece! Alright, enough with the
                                        medieval talk, this was one heck of a ride to make. I cannot express the sheer
                                        amount of
                                        drive to complete this artwork in such a glorious fashion.
                                    </p>
                                    <p className={styles.p}>
                                        Seeing the happy warrior's pride and smile, the warm and bright colors giving me
                                        hope, I powered through this and a truly proud to see the final work.
                                        This probably cemented, for me, that Harberd is one
                                        of my favorite original characters to make and draw.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.blog_post}>
                            <div className={styles.blog_header}>
                                <h3 className={styles.h3}>Progress Log 1: "Divine Power!"</h3>
                                <p className={styles.p}><time datetime="2023-09-12">9/12/23</time></p>
                            </div>
                            <div className={styles.blog_info}>
                                <div className={styles.blog_img}>
                                    <img src="Images/Blog-Images/Progress-Div-Pow.png" alt="Divine Power Rough Sketch"
                                        width="300px" />
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

                        <div className={styles.blognav}>
                            <ul>
                                <li><a href="#" class="active">1</a></li>
                                <li><Link href="./blog-2">2</Link></li>
                            </ul>
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

