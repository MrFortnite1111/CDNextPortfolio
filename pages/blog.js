import Head from 'next/head';
import styles from '../styles/blog.module.css';
import Image from 'next/image';
import Link from "next/link";
import Logo from '../src/assets/images/icons/Logo.png';
import BLSketch from '../src/assets/images/blog-images/bygone-lands-sketch.jpg';
import BLCover from '../src/assets/images/blog-images/bygone-lands-cover.jpg';
import BLAnnoucement from '../src/assets/images/blog-images/bygone-lands-annoucement.jpg';
import ToDoVanillaJS from '../src/assets/images/blog-images/vanilla-todo.png';
import VanillaJSCode from '../src/assets/images/blog-images/vanilla-code.png';
import ToDoReactJS from '../src/assets/images/blog-images/reactjs-todo.png';
import ReactJSCode from '../src/assets/images/blog-images/reactjs-code.png';
import Puqween1 from '../src/assets/images/blog-images/puqween-1.png';
import Puqween2 from '../src/assets/images/blog-images/puqween-2.png';
import Puqween3 from '../src/assets/images/blog-images/puqween-3.png';
import Meatball from '../src/assets/images/blog-images/meatball.png';
import DivinePower from '../src/assets/images/blog-images/divine-power.png';
import Instagram from '../src/assets/images/icons/Instagram_Icon.svg';
import X from '../src/assets/images/icons/Twitter_Icon.svg';
import Youtube from '../src/assets/images/icons/Youtube_Icon.svg';


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
                                            <li><Link className={styles.menu__item} href="./resume-page">Resume</Link></li>
                                        </ul>


                                    </div>

                                    <li><Link className={styles.nav_item} href="/">Home</Link></li>
                                    <li><Link className={styles.nav_item_active} href="#">Blog</Link></li>
                                    <li><Link className={styles.nav_item} href="/design-gallery">Design</Link></li>
                                    <li><Link className={styles.nav_item} href="./comics-page">Comics</Link></li>
                                    <li><Link className={styles.nav_item} href="./about">About</Link></li>
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
                                <h3 className={styles.h3}>Brave the Unknown: Bygone Lands</h3>
                                <p className={styles.p}><time datetime="2023-11-17">3/17/24</time></p>
                            </div>
                            <div className={styles.blog_info}>
                                <div className={styles.blog_img}>
                                    <Image
                                        className={styles.img}
                                        src={BLSketch.src}
                                        width={2100}
                                        height={2800}
                                        alt="Bygone Lands Sketch"
                                    />
                                    <Image
                                        className={styles.img}
                                        src={BLCover.src}
                                        width={2100}
                                        height={2800}
                                        alt="Bygone Lands Cover"
                                    />
                                    <Image
                                        className={styles.img}
                                        src={BLAnnoucement.src}
                                        width={2100}
                                        height={2100}
                                        alt="Bygone Lands Annoucement"
                                    />
                                </div>
                                <div className={styles.blog_description}>
                                    <p className={styles.p}>
                                        Howdy folks, and welcome back to my art blog. Today's post is all about going into the
                                        little details in crafting my recent artwork for my graphic novel,
                                        <a target="_blank" href="comic-page.html#paper-adventures">“Bygone Lands.”</a> This
                                        novel has been in the works for 6 years (Man, time flies by!) and I'm super excited to
                                        finally be able to finish it this Fall after all this time. Anyways, one must wonder how I
                                        made this pleasant little cover, and I'll tell you just that!
                                    </p>
                                    <h4 className={styles.h4}>
                                        What's Bygone Lands all about?
                                    </h4>
                                    <p className={styles.p}>
                                        This story is all about exploration, as our protagonists hear about the legends of a world
                                        filled to the brim with imaginations that span into infinity, beginning their adventures
                                        into an old and forgotten civilization. Once I had a good description of my story, I started
                                        thinking about how I wanted to present it to my audience cohesively. It needs to be
                                        gripping, enticing, and initiating curiosity in reading such a mysterious novel.
                                    </p>
                                    <h4 className={styles.h4}>
                                        Ideas to Cover
                                    </h4>
                                    <p className={styles.p}>
                                        Moving to the second step, I had to find out how I could compact all of that into one
                                        presentable cover. I sifted through the page sketches of my graphic novel, finding the
                                        “moment” that I want to represent as my graphic novel cover. Soon, I landed on said moment,
                                        which is when the protagonists are swept away to a forgotten civilization. Traveling through
                                        this mysterious portal, streaks of light fly around the air and the skies of both worlds
                                        seep into the portal stream. It was such a fun and miraculous way to describe and picture in
                                        my head that I had to sketch out that moment!
                                    </p>
                                    <p className={styles.p}>
                                        This is where the fun begins! I started sketching out some thumbnails for the cover and
                                        eventually moved to the big sketch with my perfect thumbnail. It was originally going to be
                                        the protagonists floating in the portal stream with the rifts opening up, but I thought the
                                        sketch was still too empty. Then, my gears started turning, thinking about the details of
                                        world building as a whole! Eventually, I added sky lanterns into the mix of illustrations,
                                        as a means of representing the festival's culture in the novel with wishes sent to the other
                                        side to become a reality.
                                    </p>
                                    <h4 className={styles.h4}>
                                        Time for Illustrating!!
                                    </h4>
                                    <p className={styles.p}>
                                        With my sketch completed, I began to work on Procreate where I ink and color in the artwork.
                                        Getting used to the software and using each stroke elegantly, this was an art piece I had
                                        the most fun in while challenging myself critically in making choices in this artwork.
                                    </p>
                                    <p className={styles.p}>
                                        The biggest challenges were drawing the building structures in the portal rifts and
                                        balancing my contrast of colors. I'm not all that proficient in drawing buildings, but this
                                        artwork is giving me a push into diving into that category, along with strengthening my
                                        color choices. Regardless of these challenges, the aspects that I had the most fun with
                                        outshine my struggles, with parts such as the unity of the elements in the cover art and the
                                        entire spectacle of the finished product.
                                    </p>
                                    <p className={styles.p}>
                                        In short, this cover has seen many renditions and hard challenges in the process, but the
                                        overall result is so satisfying to see and compare to my previous covers! I'm still very
                                        excited about the progress I've made on my graphic novel after all these years and am
                                        looking forward to wrapping it all up!
                                    </p>
                                    <p className={styles.p}>
                                        If you're interested in learning more about “Bygone Lands,” feel free to check out my
                                        <a target="_blank" href="https://www.instagram.com/starro_art_/"> Instagram</a> or my
                                        <a target="_blank" href="https://twitter.com/starro_art_"> Twitter</a> to catch up on
                                        updates of my graphic novel!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.blog_post}>
                            <div className={styles.blog_header}>
                                <h3 className={styles.h3}>My Experience with Vanilla JS and React JS</h3>
                                <p className={styles.p}><time datetime="2024-03-12">03/12/24</time></p>
                            </div>
                            <div className={styles.blog_info}>
                                <div className={styles.blog_img}>
                                    <Image
                                        className={styles.img}
                                        src={ToDoVanillaJS.src}
                                        width={2100}
                                        height={2100}
                                        alt="To-Do App made with Vanilla JS"
                                    />
                                    <Image
                                        className={styles.img}
                                        src={VanillaJSCode.src}
                                        width={2100}
                                        height={2100}
                                        alt="Vanilla JS Code"
                                    />
                                    <Image
                                        className={styles.img}
                                        src={ToDoReactJS.src}
                                        width={2100}
                                        height={2100}
                                        alt="To-Do App made with React JS"
                                    />
                                    <Image
                                        className={styles.img}
                                        src={ReactJSCode.src}
                                        width={2100}
                                        height={2100}
                                        alt="React JS Code"
                                    />
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
                                    <Image
                                        className={styles.img}
                                        src={Puqween1.src}
                                        width={1400}
                                        height={2100}
                                        alt="Puqween 1"
                                    />
                                    <Image
                                        className={styles.img}
                                        src={Puqween2.src}
                                        width={1400}
                                        height={2100}
                                        alt="Puqween 2"
                                    />
                                    <Image
                                        className={styles.img}
                                        src={Puqween3.src}
                                        width={1400}
                                        height={2100}
                                        alt="Puqween 3"
                                    />

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
                                    <Image
                                        className={styles.img}
                                        src={Meatball.src}
                                        width={1500}
                                        height={2200}
                                        alt="Meatball"
                                    />
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
                                    <Image
                                        className={styles.img}
                                        src={DivinePower.src}
                                        width={1000}
                                        height={1700}
                                        alt="Divine Power"
                                    />
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


                        <div className={styles.blognav}>
                            <ul>
                                <li><Link href="#" className={styles.active}>1</Link></li>
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

