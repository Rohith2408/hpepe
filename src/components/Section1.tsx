import styles from "./Section1.module.css";
import { useEffect, useRef, useState } from "react";
import bg from '../images/Section1/bg.png'
import telegram_icon from '../images/Section1/telegram.png'
import twitter_icon from '../images/Section1/twitter.png'
import dex_icon from '../images/Section1/dex.png'

const Section1=()=>{

    const ca=useRef("84848484848").current
    const socialIcons = useRef([
        { src: telegram_icon, link: "https://t.me/hpepecto" },
        { src: twitter_icon, link: "https://x.com/hpepecto" },
        { src:dex_icon, link: "https://dexscreener.com/solana/kb6eidtdewxwpnltbfkc3t9c7a6xlfvvqhwbatseeb5" },
        // { src: "/dextools.png", link: "https://www.dextools.io/app/en/solana/pair-explorer/AxrSAP7p2tP8gHTYUUzHncN2vBFuFGSPJjvvzB7919F2?t=1721480118895" }
      ]).current;

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <div className={styles.textWrapper}>
                    <p className={styles.title}>$hpepe</p>
                    <p className={styles.text}>
                        The most memeable memecoin in existence.
                        The dogs have had their day, it’s time for Pepe to take reign.
                    </p>
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
                <div className={styles.imageWrapper}>
                    <img className={styles.image}></img>
                </div>
            </div>
        </section>
    )
}

export default Section1