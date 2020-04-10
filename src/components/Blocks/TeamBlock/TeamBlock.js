import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import './TeamBlock.css';

import Leonid from "../../../img/team/leonid.jpg";

class TeamBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgs: [Leonid, Leonid, Leonid, Leonid, Leonid, Leonid]
        };
    }

    render() {
        const settingSlide = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 3,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ],
        };
        return (
            <div className="team-slider">
                <p className="team-slider-title t-center block-title">Команда <span className="light_green_color">ZOLOCHE RANGERS CAMP</span></p>
                <Slider {...settingSlide} className="m20">
                    {this.state.imgs.map((img, num) => (
                        <div className="t-center" key={num}>
                            <div className="team-photo">
                                <img src={img} alt="Безпека zoloche rangers camp" />
                            </div>
                            <p class="team-name">Ім'я та Прізвище</p>
                            <p class="team-pos">посада людини</p>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

export default TeamBlock;
