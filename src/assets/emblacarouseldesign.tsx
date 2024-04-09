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
import TheNoise from '../../images/recent-art-gallery/TheNoise-PizzaTower.jpg';
import BygoneLandsCover from '../../images/recent-art-gallery/Bygone-Lands-Cover.png';
import Farewell from '../../images/recent-art-gallery/Farewell-Celeste.jpg';



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
                            src={TheNoise.src}
                            width={2800}
                            height={3500}
                            alt="The Noise - Pizza Tower"
                        />
                    </div>
                    <div className="embla__slide flex items-center justify-center">
                        <Image
                            className={styles.gallery_img}
                            src={BygoneLandsCover.src}
                            width={2800}
                            height={3500}
                            alt="Bygone Lands Cover"
                        />
                    </div>
                    <div className="embla__slide flex items-center justify-center">
                        <Image
                            className={styles.gallery_img}
                            src={Farewell.src}
                            width={2800}
                            height={3500}
                            alt="Farewell - Celeste"
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