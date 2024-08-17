import styles from "./Section1.module.css";
import { useEffect, useRef, useState } from "react";
import bg from '../images/Section1/bg.png'
import telegram_icon from '../images/Section1/telegram.png'
import twitter_icon from '../images/Section1/twitter.png'
import dex_icon from '../images/Section1/dex.png'
import dextools_icon from '../images/Section1/dextools.png'
import t1 from '../images/Section1/trippy1/1.png'
import t2 from '../images/Section1/trippy1/2.png'
import t3 from '../images/Section1/trippy1/3.png'
import t4 from '../images/Section1/trippy1/4.png'
import t5 from '../images/Section1/trippy1/5.png'
import t6 from '../images/Section1/trippy1/6.png'
import t7 from '../images/Section1/trippy1/7.png'
import trippy from '../images/Section1/1.gif'
import banner from '../images/Section1/banner.gif'

const Section1=()=>{

    const socialIcons = useRef([
        { src: telegram_icon, link: "https://t.me/hpepecto" },
        { src: twitter_icon, link: "https://x.com/hpepecto" },
        { src:dex_icon, link: "https://dexscreener.com/solana/kb6eidtdewxwpnltbfkc3t9c7a6xlfvvqhwbatseeb5" },
        { src: dextools_icon, link: "https://www.dextools.io/app/en/solana/pair-explorer/KB6EiDtdewXwpNLTBfKC3t9C7A6XLFvvQHwBaTSeeb5?t=1723830652615" }
    ]).current;
    const bg=useRef([t1,t2,t3,t4,t5,t6,t7]).current
    const [currentbg,setCurrentBg]=useState(0)
    const interval=useRef<any>()

    useEffect(()=>{
        if(interval.current)
        {
            clearInterval(interval.current)
        }
        interval.current=setInterval(()=>{
            setCurrentBg(currentbg==6?0:currentbg+1)
        },100)
    },[currentbg])

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <img className={styles.bg} src={trippy}/>
            <div className={styles.subwrapper}>
                <img className={styles.banner} src={banner}/>
                <div className={styles.textWrapper}>
                    <div className={styles.textSubWrapper}>
                        <p className={styles.title}>$hpepe</p>
                        <p className={styles.text}>It's just Pepe but in Hex</p>
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