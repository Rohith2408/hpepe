import styles from "./Section2.module.css";
import { useEffect, useRef, useState } from "react";
import bg from '../images/Section2/bg.png'

const Section2=()=>{

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <div className={styles.imageWrapper}>
                    <img className={styles.image}></img>
                </div>
                <div className={styles.textWrapper}>
                    <p className={styles.title}>about</p>
                    <p className={styles.text}>
                        Hpepe is tired of watching everyone play hot potato with the endless derivative ShibaCumGMElonKishuTurboAss Inu coins. The Inu’s have had their day. It’s time for the most recognizable meme in the world to take his reign as king of the internet.
                        Hpepe is here to make memecoins great again. Launched stealth with no presale, zero taxes, LP burnt and contract renounced, $HPEPE is a coin for the people, forever. 
                    </p>
                </div>
                <div className={styles.imageWrapper2}>
                    <img className={styles.image}></img>
                </div>
            </div>
        </section>
    )
}

export default Section2