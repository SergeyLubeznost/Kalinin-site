import React from "react";
import "./main.css"
import logoMain from "./image-main/Group 61.svg"


function Main (){
    return(
<section className="section-main">
    <div className="main-container">
        <div className="logo-main">
            <img src={logoMain} alt="" />
        </div>
        <h1 className="main-title">ГРИМЁРНЫЕ СТОЛЫ <br />И ЗЕРКАЛА ДЛЯ ВАС</h1>
        <div className="main-btn-group">
            <button className="main-btn-catalog">Каталог</button>
            <button className="main-btn-contact">Связаться</button>
        </div>
    </div>
</section>
    );
}

export default Main