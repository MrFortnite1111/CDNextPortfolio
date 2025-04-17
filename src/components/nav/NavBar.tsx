"use client"
import { usePathname } from "next/navigation";
import styles from "../../../styles/styles.module.css"
import Image from 'next/image';
import Link from "next/link";
import Logo from '../../../src/assets/images/icons/Logo.png';

const NavBar = () => {
    const pathname = usePathname();

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: "Design", href: "/design-directory" },
        { label: "Comics", href: "/comics-page" },
        { label: "About", href: "/about" },
        { label: "Resume", href: "/aaron-tans-resume.pdf", external: true }
    ];

    const isActive = (href) => {
        if (href === "/") {
            return pathname === "/";
        }
        return pathname === href || pathname.startsWith(href + "/") || pathname.startsWith(href + "?");
    };



    return (

        <nav className={styles.nav}>
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

            {/* Hamburger Menu */}
            <div className={styles.hamburgermenu}>
                <input id="menu-toggle" className={styles.menu__toggle} type="checkbox" />
                <label className={styles.menu__btn} htmlFor={"menu-toggle"}>
                    <span></span>
                </label>

                <ul className={styles.menu__box}>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            {item.external ? (
                                <a
                                    className={styles.menu__item}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <Link
                                    className={isActive(item.href) ? styles.menu__item_active : styles.menu__item}
                                    href={item.href}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Desktop Nav */}
            <ul>
                {navItems.map((item) => (
                    <li key={item.href}>
                        {item.external ? (
                            <a
                                className={styles.nav_item}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item.label}
                            </a>
                        ) : (
                            <Link
                                className={isActive(item.href) ? styles.nav_item_active : styles.nav_item}
                                href={item.href}
                            >
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>

    );

}

export default NavBar