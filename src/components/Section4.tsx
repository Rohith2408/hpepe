import styles from "./Section4.module.css";
import { useEffect, useRef, useState } from "react";
import copy_icon from '../images/Section3/copy.png'
import bg from '../images/Section3/bg.png'

const Section4=()=>{

    const ca=useRef("84848484848").current
    const [text,setText]=useState("")
    const [hex,setHex]=useState("")  

    const setTexts=(type:"hex"|"text",value:string)=>{
        if(type=="hex")
        {
            setHex(value)
            setText(hexToText(value))
        }
        if(type=="text")
        {
            setHex(textToHex(value))
            setText(value)
        }
    }

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                {/* <img src={bg} className={styles.bg1}></img>
                <img src={bg} className={styles.bg2} style={{transform:"scaleX(-1)"}}></img> */}
                <div className={styles.boxWrapper}>
                    {/* <p className={styles.title}>Text to Hex Converter</p> */}
                    <div className={styles.box}>
                        <div className={styles.titleWrapper}> 
                            <p className={styles.caTitle}>Hex</p>
                            <button className={styles.copyWrapper} onClick={()=>{alert("Your Hex Text has been copied");navigator.clipboard.writeText(hex)}}><img className={styles.copyIcon} src={copy_icon}></img></button>
                        </div>
                        <div className={styles.boxForeground}>
                            <textarea onChange={(e)=>setTexts("hex",e.target.value)} value={hex} className={styles.textarea} placeholder="Enter the Hex to convert to Text"></textarea>
                        </div>
                        <div className={styles.boxBackground}></div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.titleWrapper}> 
                            <p className={styles.caTitle}>Text</p>
                            <button className={styles.copyWrapper} onClick={()=>{alert("Your Text has been copied");navigator.clipboard.writeText(text)}}><img className={styles.copyIcon} src={copy_icon}></img></button>
                        </div>
                        <div className={styles.boxForeground}>
                            <textarea onChange={(e)=>setTexts("text",e.target.value)} value={text} className={styles.textarea} placeholder="Enter the Text to convert to Hex"></textarea>
                        </div>
                        <div className={styles.boxBackground}></div>
                    </div>
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

function hexToText(hex:string) {
    let str = '';
    for (let i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return str;
}

export default Section4