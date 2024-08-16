import styles from "./Section1.module.css";
import { useEffect, useRef, useState } from "react";
import bg from '../images/Section1/bg.png'

const Section1=()=>{

    const ca=useRef("84848484848").current

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <div className={styles.textWrapper}>
                    <p className={styles.title}>$hpepe</p>
                    <p className={styles.text}>
                        The most memeable memecoin in existence.
                        The dogs have had their day, it’s time for Pepe to take reign.
                    </p>
                </div>
                <div className={styles.imageWrapper}>
                    <img className={styles.image}></img>
                </div>
            </div>
        </section>
    )
}

export default Section1