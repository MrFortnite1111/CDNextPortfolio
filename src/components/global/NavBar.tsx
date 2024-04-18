import Image from "next/image";
import Logo from '../images/icons/Logo.png';
import Link from "next/link";
import styles from "../../../styles/styles.module.css";

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
                <label className={styles.menu__btn} htmlFor={"menu-toggle"}>
                    <span></span>
                </label>

                <ul className={styles.menu__box}>
                    <li><Link className={styles.menu__item_active} href="/">Home</Link></li>
                    <li><Link className={styles.menu__item} href="./blog">Blog</Link></li>
                    <li><Link className={styles.menu__item} href="./design-gallery">Design</Link></li>
                    <li><Link className={styles.menu__item} href="./comics-page">Comics</Link></li>
                    <li><Link className={styles.menu__item} href="./about">About</Link></li>
                    <li><Link className={styles.menu__item} href="./contact-page">Contact</Link></li>
                    <li><Link className={styles.nav_item} href="./resume-page">Resume</Link></li>
                </ul>
            </div>

            <li><Link className={styles.nav_item_active} href="/">Home</Link></li>
            <li><Link className={styles.nav_item} href="./blog">Blog</Link></li>
            <li><Link className={styles.nav_item} href="/design-gallery">Design</Link></li>
            <li><Link className={styles.nav_item} href="./comics-page">Comics</Link></li>
            <li><Link className={styles.nav_item} href="./about">About</Link></li>
            <li><Link className={styles.nav_item} href="./contact-page">Contact</Link></li>
            <li><Link className={styles.nav_item} href="./resume-page">Resume</Link></li>
        </ul>
    </nav>

</div>