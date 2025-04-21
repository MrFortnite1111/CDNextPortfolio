"use client";
import { useState } from "react";
import blogPosts from "../data/blogPosts.js";
import Image from "next/image";
import styles from "../styles/styles.module.css";
import Head from 'next/head';
import Header from '../src/components/global/Header.js';
import bannerImg from '../public/images/banners/symphony.jpg';
import Footer from '../src/components/global/Footer.js';
import ReactMarkdown from 'react-markdown';


const POSTS_PER_PAGE = 3;

const Blog = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const sortedPosts = blogPosts
        .slice()
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
    const indexOfLastPost = currentPage * POSTS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
    const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

    const [transitionDirection, setTransitionDirection] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [displayedPage, setDisplayedPage] = useState(currentPage);

    const [fadeToColor, setFadeToColor] = useState(false);

    const goToNextPage = () => {
        if (currentPage < totalPages && !isAnimating) {
            setFadeToColor(true);  // Trigger fade-to-color effect
            setTransitionDirection("right");
            setIsAnimating(true);
            setTimeout(() => {
                setTransitionDirection(null);  // Reset direction after the transition
                setCurrentPage(currentPage + 1);
                setIsAnimating(false);
                setFadeToColor(false); // Reset fade-to-color after transition
            }, 600);  // Match your total transition duration
        }
    };
    
    const goToPrevPage = () => {
        if (currentPage > 1 && !isAnimating) {
            setFadeToColor(true);  // Trigger fade-to-color effect
            setTransitionDirection("left");
            setIsAnimating(true);
            setTimeout(() => {
                setTransitionDirection(null);  // Reset direction after the transition
                setCurrentPage(currentPage - 1);
                setIsAnimating(false);
                setFadeToColor(false); // Reset fade-to-color after transition
            }, 600);  // Match your total transition duration
        }
    };
    
    

    return (
        <div className={styles.container}> {/* wrapper with appropriate background */}
            <Head>
                <title>Cosmic Designs | Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.body}>
                <div className={styles.container}>

                    <Header
                        bannerImage={bannerImg.src}
                        title="MY BLOG"
                    />

                    {/* Pagination Controls */}
                    <div className={styles.bottomnav}>
                        <div className={styles.button_container}>
                            <button
                                onClick={goToPrevPage}
                                disabled={currentPage === 1}
                                className={styles.button}
                            >
                                Previous
                            </button>
                        </div>
                        <span className={styles.p} style={{ margin: "0 1rem" }}>
                            Page {currentPage} of {totalPages}
                        </span>
                        <div className={styles.button_container}>
                            <button
                                onClick={goToNextPage}
                                disabled={currentPage === totalPages}
                                className={styles.button}
                            >
                                Next
                            </button>
                        </div>
                    </div>

                    <div className={`${styles.blogSliderWrapper} ${fadeToColor ? styles.fadeToColor : ""}`}>
                        <div
                            className={`${styles.blogSlider} ${isAnimating
                                ? transitionDirection === "right"
                                    ? styles.slideRight
                                    : styles.slideLeft
                                : ""
                                }`}
                        >
                            {currentPosts.map((post) => (
                                <div key={post.id} className={styles.section_2}>
                                    <div className={styles.blog_images}>
                                        {post.images?.map((img, index) =>
                                            img ? (
                                                <Image
                                                    key={index}
                                                    src={img}
                                                    alt={`Image ${index}`}
                                                    width={1200}
                                                    height={1500}
                                                />
                                            ) : null
                                        )}

                                    </div>
                                    <div className={styles.blog_description}>
                                        <h2>{post.title}</h2>
                                        <h3><em>{post.date}</em></h3>
                                        <ReactMarkdown>{post.content}</ReactMarkdown>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination Controls */}
                    <div className={styles.bottomnav}>
                        <div className={styles.button_container}>
                            <button
                                onClick={goToPrevPage}
                                disabled={currentPage === 1}
                                className={styles.button}
                            >
                                Previous
                            </button>
                        </div>
                        <span className={styles.p} style={{ margin: "0 1rem" }}>
                            Page {currentPage} of {totalPages}
                        </span>
                        <div className={styles.button_container}>
                            <button
                                onClick={goToNextPage}
                                disabled={currentPage === totalPages}
                                className={styles.button}
                            >
                                Next
                            </button>
                        </div>
                    </div>

                    <Footer />

                </div>
            </main >
        </div >
    );
};

export default Blog;
