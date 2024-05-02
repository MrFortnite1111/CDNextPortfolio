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
import FruitQuest from '../assets/images/portfolio-gallery/fruit-quest.png';
import DivinePower from '../assets/images/portfolio-gallery/divine-power.png';
import TracyJCSheet from '../assets/images/portfolio-gallery/tracyjefferson-charactersheet.png';



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
                            src={FruitQuest.src}
                            width={2800}
                            height={3500}
                            alt="Fruit Quest"
                        />
                    </div>
                    <div className="embla__slide flex items-center justify-center">
                        <Image
                            className={styles.gallery_img}
                            src={DivinePower.src}
                            width={2800}
                            height={3500}
                            alt="Divine Power"
                        />
                    </div>
                    <div className="embla__slide flex items-center justify-center">
                        <Image
                            className={styles.gallery_img}
                            src={TracyJCSheet.src}
                            width={2800}
                            height={3500}
                            alt="Tracy Jefferson Character Sheet"
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