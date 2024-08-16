import styles from "./Section1.module.css";
import { useEffect, useRef, useState } from "react";
import bg from '../images/Section1/bg.png'
import telegram_icon from '../images/Section1/telegram.png'
import twitter_icon from '../images/Section1/twitter.png'
import dex_icon from '../images/Section1/dex.png'
import dextools_icon from '../images/Section1/dextools.png'

const Section1=()=>{

    const socialIcons = useRef([
        { src: telegram_icon, link: "https://t.me/hpepecto" },
        { src: twitter_icon, link: "https://x.com/hpepecto" },
        { src:dex_icon, link: "https://dexscreener.com/solana/kb6eidtdewxwpnltbfkc3t9c7a6xlfvvqhwbatseeb5" },
        { src: dextools_icon, link: "https://www.dextools.io/app/en/solana/pair-explorer/KB6EiDtdewXwpNLTBfKC3t9C7A6XLFvvQHwBaTSeeb5?t=1723830652615" }
    ]).current;

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <div className={styles.textWrapper}>
                    <div className={styles.textSubWrapper}>
                        <p className={styles.title}>$hpepe</p>
                        <p className={styles.text}>It's just Pepe but hex</p>
                        <div className={styles.socialWrapper}>
                        {
                            socialIcons.map((icon) => (
                                <a key={icon.src} href={icon.link} target="_blank" rel="noopener noreferrer" >
                                    <img
                                        className={styles.socialicons}
                                        loading="lazy"
                                        alt=""
                                        src={icon.src}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    <img className={styles.image}></img>
                </div>
            </div>
        </section>
    )
}

export default Section1