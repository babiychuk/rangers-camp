import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import './Park.css';

import Video from "../../img/park.mp4";


class Park extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="park_page">
                    <div className="home-video-wrapper">
                        <video id="myvideo" preload="auto" autoPlay="autoPlay" loop="loop" muted="muted">
                            <source src={Video} type="video/mp4" />
                        </video>
                    </div>

                    <div className="header_block">
                        <h2>Zoloche Rangers Park</h2>
                    </div>
                </div>
                <Footer />
            </div >
        );
    }
}

export default Park;
