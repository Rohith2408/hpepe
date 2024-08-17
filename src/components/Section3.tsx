import styles from "./Section3.module.css";
import { useEffect, useRef, useState } from "react";
import copy_icon from '../images/Section3/copy.png'
import bg from '../images/Section3/bg.png'
import t1 from '../images/Section1/tripp3/1.png'
import t2 from '../images/Section1/tripp3/2.png'
import t3 from '../images/Section1/tripp3/3.png'
import trippy from '../images/Section1/3.gif'

const Section3=()=>{

    const ca=useRef("CN6YBfSnmmSfr2yX6gTg6hyQDo5yx1D2QFMGRxMGpump").current
    const email=useRef("support@hpepecto.com").current //"hexpepecto@gmail.com"
    const hexText=useRef("");
    const bg=useRef([t1,t2,t3,t2]).current
    const [currentbg,setCurrentBg]=useState(0)
    const interval=useRef<any>()

    useEffect(()=>{
        if(interval.current)
        {
            clearInterval(interval.current)
        }
        interval.current=setInterval(()=>{
            setCurrentBg(currentbg==3?0:currentbg+1)
        },100)
    },[currentbg])

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <img className={styles.bg} src={trippy}/>
            <div className={styles.subwrapper}>
                <img className={styles.bg1}></img>
                <img className={styles.bg2} style={{transform:"scaleX(-1)"}}></img>
                <div className={styles.boxWrapper}>
                    <div className={styles.box}>
                        <p className={styles.caTitle}>Contract Address</p>
                        <div className={styles.boxForeground}>
                            <p className={styles.ca}>{ca}</p>
                            <button className={styles.copyWrapper} onClick={()=>{alert("Contract Address Copied");navigator.clipboard.writeText(ca)}}><img className={styles.copyIcon} src={copy_icon}></img></button>
                        </div>
                        <div className={styles.boxBackground}></div>
                    </div>
                    <div className={styles.emailWrapper}>
                        {/* <p className={styles.emailTitle}>Email Id:</p> */}
                        <a style={{textDecoration:"none"}} href={"https://mail.google.com/mail/?view=cm&fs=1&to="+email} target="_blank"><p className={styles.email}>Mail us</p></a>
                        {/* <a ma>{email}</a> */}
                        {/* <p className={styles.email}>{email}</p> */}
                    </div>
                    {/* <div className={styles.box}>
                        <p className={styles.caTitle}>Text to Hex Converter</p>
                        <div className={styles.boxForeground}>
                            <input style={{overflow:"hidden"}} onChange={(e)=>hexText.current=e.target.value} className={styles.ca} placeholder="Enter the text here"></input>
                            <button className={styles.copyWrapper} onClick={()=>{alert("Your Hex text has been copied");navigator.clipboard.writeText(textToHex(hexText.current))}}><img className={styles.copyIcon} src={copy_icon}></img></button>
                        </div>
                        <div className={styles.boxBackground}></div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

function textToHex(text:string) {
    let hex = '';
    for (let i = 0; i < text.length; i++) {
        hex += text.charCodeAt(i).toString(16);
    }
    return hex;
}

export default Section3