import React from 'react';
import Image from 'next/image';
import ContactForm from "./ContactForm";
import styles from '../../../styles/styles.module.css';
import Greetings from "../../../public/images/main/footer-image.png";
import Instagram from '../../../public/images/icons/Instagram_Icon.svg';
import X from '../../../public/images/icons/Twitter_Icon.svg';
import Youtube from '../../../public/images/icons/Youtube_Icon.svg';
import Linkedin from '../../../public/images/icons/Linkedin_Icon.svg';

const Footer = () => {

    return (

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

                <p className={styles.copyright_text}>
                    Copyright 2025 Cosmic Design | All Rights Reserved | Use of my works to be trained off AI is strictly prohibited.
                </p>

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
                <li>
                    <a href="https://www.linkedin.com/in/aaron-tan-943b382b6" target="_blank">
                        <Image
                            src={Linkedin.src}
                            width={38}
                            height={38}
                            alt="Linkedin"
                        />
                    </a>
                </li>
            </ul>
        </footer>

    );

}

export default Footer