import "./Topbar.css"
import React, {useEffect, useState} from "react"
import logo from "./assets/logo_y.png"
import hamburger from "./assets/hamburger_icon.svg"
import lupa from "./assets/icon_search.svg"
import {isMobile} from 'react-device-detect';
import fundalMobile from "./assets/fundalMobil.jpg"

export function Topbar(){

    const [isScrolled, toggleScroll] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", handleNavigation);
    }, []);


    function handleNavigation(e){
        if(window.scrollY>0){
            toggleScroll(true)
        }
        else{
            if(window.scrollY == 0){
                toggleScroll(false)
            }
        }
    }

    if(isMobile){
        console.log("test")
    }
    else{
        console.log("nu merge")
    }

    console.log(isScrolled)

    return (
    <div className={`topbar-root ${isScrolled ? "scrolled": ""}`}> 
            <div className="restulProiectului"></div>
        <div className={`topBar${isScrolled ? "Scrolled": ""}`}>
            
            <div className={`leftSide${isScrolled ? "Scrolled": ""}`}>
                <div className={`hamburger${isScrolled ? "Scrolled": ""}`}>
                    <img src={hamburger} alt="hamburger" />
                </div>
                <div className={`textLeft${isScrolled ? "Scrolled": ""}`}>
                    <p>JOCURI GRATIS</p>
                    <p>JOCURI NOI</p>
                </div>
            </div>
            
            <div className={`logo${isScrolled ? "scrolled": ""}`}>
                <img className={`img${isScrolled ? "scrolled": ""}`} src={logo} alt="logo" />
            </div>
            <div className={`rightSide${isScrolled ? "scrolled": ""}`}>
                <div className="Cont">
                    <p className="creareCont">CREARE CONT</p>
                    <p className="conectare">CONECTARE</p>
                </div>
                <div className={`textRight${isScrolled ? "Scrolled": ""}`}>
                    <p>JOCURI POPULARE</p>    
                    <p>TOP 10</p>
                </div> 
            </div>
            
        </div>
        <div className={`bottomSide${isScrolled ? "Scrolled": ""}`}>
            <img className={`lupa${isScrolled ? "Scrolled": ""}`} src={lupa} alt="lupa" />
               <p>JOCURI GRATIS</p> 
               <p>JOCURI NOI</p>
               <p>JOCURI POPULARE</p>
               <p>TOP 10</p>
        </div>
    </div>
    )
}