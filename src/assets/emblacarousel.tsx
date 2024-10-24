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
                            src={BygoneLandsCover.src}
                            width={2800}
                            height={3500}
                            alt="Book cover displaying three figures falling through a pink portal
                            landscape between worlds."
                        />
                    </div>
                    <div className="embla__slide flex items-center justify-center">
                        <Image
                            className={styles.gallery_img}
                            src={TheLight.src}
                            width={2300}
                            height={3500}
                            alt="Digital artwork showcasing a ghost ship with a lighthouse on top of it,
                            shining light onto a silhouetted woman."
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
                            src={DNDAlbum.src}
                            width={2800}
                            height={3500}
                            alt="Mockup displaying an album cover of four villains with the title beneath
                             them, 'Elegy for Myirgdrar.' The album cover is sat next to some Dungeons and
                             Dragon dice and a map sheet."
                        />
                    </div>
                    <div className="embla__slide flex items-center justify-center">
                        <Image
                            className={styles.gallery_img}
                            src={Electrifying.src}
                            width={2800}
                            height={3500}
                            alt="Digital artwork displaying an axolotl rockstar summoning lightning onto himself,
                            with debris of rocks and dirt flying into the air."
                        />
                    </div>
                    <div className="embla__slide flex items-center justify-center">
                        <Image
                            className={styles.gallery_img}
                            src={HusketTolerates.src}
                            width={2800}
                            height={3500}
                            alt="Digital artwork showcasing a long-nosed man, who is discontent with a kitten sleeping
                            in his bucket. The subtitles below say, '... my bucket ...'"
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