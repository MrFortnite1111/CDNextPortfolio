import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import styles from "./gallery.module.css";

type ImageItem = {
    src: string;
    alt: string;        // For accessibility + image fallback
    title: string;      // For lightbox caption only
    className?: string;
};

type BentoGridProps = {
    images: ImageItem[];
};

const BentoGrid: React.FC<BentoGridProps> = ({ images }) => {
    const [index, setIndex] = useState(-1);

    return (
        <>
            <div className={styles.bentoGrid}>
                {images.map((img, i) => (
                    <div
                        key={i}
                        className={`${styles.gridItem} ${img.className ? styles[img.className] : ""}`}
                        onClick={() => setIndex(i)}
                        style={{ cursor: "pointer" }}
                    >
                        <div className={styles.imageWrapper}>
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                style={{ objectFit: "contain" }}
                                sizes="(max-width: 768px) 100vw, 33vw"
                                priority={i < 3}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.customLightboxWrapper}>
                <Lightbox
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    slides={images.map(({ src, title }) => ({ src, title }))}
                    plugins={[Captions]}
                />
            </div>
        </>
    );
};

export default BentoGrid;
