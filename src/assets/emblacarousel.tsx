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
import Lawton from '../../public/images/graphicdesign/lawton-invitation.jpg';
import Inlander from '../../public/images/graphicdesign/inlander-summercamps-cover.jpg';
import DNDPoster from '../../public/images/illustrations/searedembers-poster.jpg';
import DNDAlbum from '../../public/images/illustrations/dndalbum-mockup.jpg';
import ReefArchives from '../../public/images/graphicdesign/reefarchive-ux.jpg';
import Meteora from '../../public/images/illustrations/meteoras-dance.jpg';
import Pepsi from '../../public/images/graphicdesign/pepsitruckwrap_onepage.jpg';
import Overgrowth from '../../public/images/illustrations/overgrowth-print.jpg';
import Serenity from '../../public/images/illustrations/serenityinthousands.jpg';


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
            src: Lawton.src,
            alt: "Lawton Invitation - Bubble Coral Aquarium",
        },
        {
            src: Inlander.src,
            alt: "Inlander Summer Camps Cover 2025",
        },
        {
            src: DNDPoster.src,
            alt: "Seared Embers Poster - DnD",
        },
        {
            src: DNDAlbum.src,
            alt: "Elegy for M'yirgdrar Album Mockup",
        },
        {
            src: ReefArchives.src,
            alt: "Reef Archive UX Project",
        },
        {
            src: Meteora.src,
            alt: "Meteora's Dance (2024)",
        },
        {
            src: Pepsi.src,
            alt: "Pepsi Truck Wrap Design One Page",
        },
        {
            src: Overgrowth.src,
            alt: "Overgrowth (2024)",
        },
        {
            src: Serenity.src,
            alt: "Serenity in Thousands (2023)",
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