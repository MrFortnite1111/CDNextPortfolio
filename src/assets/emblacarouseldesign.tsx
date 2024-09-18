'use client'

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import styles from '../../styles/styles.module.css'
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from './emblacarouselarrowbuttons'
import ArtGreenPoster from '../../src/assets/images/design-portfolio-gallery/artonthegreen_mockup.jpg';
import WhatsDesignPoster from '../../src/assets/images/design-portfolio-gallery/whatisdesign_mockup.jpg';
import QuoteMe from '../../src/assets/images/design-portfolio-gallery/quoteme_mockup.jpg';
import Preflight from '../../src/assets/images/design-portfolio-gallery/preflight_onepage_mockup.jpg';
import Archibald from '../../src/assets/images/design-portfolio-gallery/archibald_mockup.jpg';
import AlbumCover from '../../src/assets/images/design-portfolio-gallery/septemberrain_albumcover.jpg';
import ExploreCover from '../../src/assets/images/design-portfolio-gallery/explore_cover.jpg';
import BusinessCards from '../../src/assets/images/design-portfolio-gallery/businesscard_mockup.jpg';



export default function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <div>
            <div className="embla__viewport mx-auto mt-12 h-56 max-w-lg border" ref={emblaRef}>
                <div className="embla__container h-full">
                    <div className="embla__slide flex items-center justify-center">
                        <Image
                            className={styles.gallery_img}
                            src={ArtGreenPoster.src}
                            width={2800}
                            height={3500}
                            alt="Poster with a landscape and a canvas design on display to promote
                            Art on the Green."
                        />
                    </div>
                    <div className="embla__slide flex items-center justify-center">
                        <Image
                            className={styles.gallery_img}
                            src={WhatsDesignPoster.src}
                            width={2800}
                            height={3500}
                            alt="Framed poster on the floor displaying a megaphone made out of graphic 
                            design elements, shooting the words 'Graphic Design' into a person's eye."
                        />
                    </div>
                    <div className="embla__slide flex items-center justify-center">
                        <Image
                            className={styles.gallery_img}
                            src={QuoteMe.src}
                            width={2800}
                            height={3500}
                            alt="Framed poster on a shelf displaying a charicature of Bob Ross made out of
                            words, with the quote saying, 'You're limited only by your creativity and your
                            willingness to practice.'"
                        />
                    </div>
                    <div className="embla__slide flex items-center justify-center">
                        <Image
                            className={styles.gallery_img}
                            src={Preflight.src}
                            width={3000}
                            height={3500}
                            alt="A page displaying three different mockups of a poster advertising for a
                            student portfolio review event called Preflight. The mockups include a physical
                            poster, a Facebook banner, and a webpage banner."
                        />
                    </div>
                    <div className="embla__slide flex items-center justify-center">
                        <Image
                            className={styles.gallery_img}
                            src={Archibald.src}
                            width={2800}
                            height={3500}
                            alt="A framed poster stand advertising a wine glass with googly
                            eyes called 'Archibald,' containing the tagline, 'You matter. 
                            - Archibald.'"
                        />
                    </div>
                    <div className="embla__slide flex items-center justify-center">
                        <Image
                            className={styles.gallery_img}
                            src={AlbumCover.src}
                            width={2800}
                            height={3500}
                            alt="An album cover for a single called 'September Rain' by Makoto 
                            Matsushita. The design showcases a lone man under a street lamp, 
                            looking towards a house covered in plants while its raining."
                        />
                    </div>
                    <div className="embla__slide flex items-center justify-center">
                        <Image
                            className={styles.gallery_img}
                            src={ExploreCover.src}
                            width={2800}
                            height={3500}
                            alt="An Explore travel magazine cover displaying a dragon statue 
                            resting on buildings under the ocean with a few sharks and turtles 
                            swimming about."
                        />
                    </div>
                    <div className="embla__slide flex items-center justify-center">
                        <Image
                            className={styles.gallery_img}
                            src={BusinessCards.src}
                            width={3000}
                            height={3500}
                            alt="A mockup displaying many stacked purple and yellow business cards 
                            for my brand, Cosmic Designs."
                        />
                    </div>
                </div>
            </div>

            <div className={styles.embla__controls}>
                <div className={styles.embla__buttons}>
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </div>
    )
}