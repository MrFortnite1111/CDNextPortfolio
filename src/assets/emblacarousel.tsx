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
import ExploreCover from '../../src/assets/images/design-portfolio-gallery/explore_cover.jpg';
import BygoneLandsCover from '../../src/assets/images/comic-covers/bygonelands-cover.png';
import TheLight from '../../src/assets/images/portfolio-gallery/thelight.jpg';
import Electrifying from '../../src/assets/images/portfolio-gallery/electrifying.jpg';
import DNDAlbum from '../../src/assets/images/portfolio-gallery/dndalbum_mockup.jpg';
import HusketTolerates from '../../src/assets/images/portfolio-gallery/husket_tolerates.jpg';


export default function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const slides = [
        {
            src: ArtGreenPoster.src,
            alt: "Art on the Green",
        },
        {
            src: WhatsDesignPoster.src,
            alt: "What is Graphic & Web Design Poster",
        },
        {
            src: QuoteMe.src,
            alt: "Bob Ross Quote Poster",
        },
        {
            src: BygoneLandsCover.src,
            alt: "Cover for my graphic novel, Bygone Lands",
        },
        {
            src: TheLight.src,
            alt: "The Light (2024)",
        },
        {
            src: ExploreCover.src,
            alt: "EXPLORE Magazine Cover",
        },
        {
            src: Electrifying.src,
            alt: "Electrifying (2023)",
        },
        {
            src: DNDAlbum.src,
            alt: "Elegy for M'yirgdrar Album Cover (2024)",
        },
        {
            src: HusketTolerates.src,
            alt: "Husket Tolerates (2024)",
        },
    ];


    return (
        <div>
            <div className="embla__viewport mx-auto mt-12 max-w-2xl px-4" ref={emblaRef}>
                <div className="embla__container h-full">
                    {slides.map((slide, index) => (
                        <div key={index} className="embla__slide">
                            <div className={styles.slide_inner}>
                                <Image
                                    className={styles.gallery_img}
                                    src={slide.src}
                                    width={2800}
                                    height={3500}
                                    alt={slide.alt}
                                />
                                <p className={styles.caption}>{slide.alt}</p>
                            </div>
                        </div>

                    ))}
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