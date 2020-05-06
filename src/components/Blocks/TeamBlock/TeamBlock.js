import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import './TeamBlock.css';

import aleksandraEmec from "../../../img/team/aleksandraEmec.jpg";
import igorVlad from "../../../img/team/igorVlad.JPG";
import lizaLav from "../../../img/team/lizaLav.jpg";
import daryaDem from "../../../img/team/daryaDem.jpg";
import nataliZyb from "../../../img/team/nataliZyb.jpg";
import anatLyz from "../../../img/team/anatLyz.JPG";
import IgorGerg from "../../../img/team/IgorGerg.jpg";
import allTeam from "../../../img/team/allTeam.jpg";

class TeamBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [
                {
                    image: aleksandraEmec,
                    name: "Олександра Ємець",
                    surname: "Начальник табору"
                },
                {
                    image: igorVlad,
                    name: "Ігор Владимиров",
                    surname: "Комендант табору"
                },
                {
                    image: lizaLav,
                    name: "Ліза Лавриш",
                    surname: "Коордитнатор з програми"
                },
                {
                    image: daryaDem,
                    name: "Дар'я Демчук-Маригіна",
                    surname: "Координатор з програми"
                },
                {
                    image: nataliZyb,
                    name: "Наталія Зубарєва",
                    surname: "Координатор з харчування"
                },

                {
                    image: anatLyz,
                    name: "Анатолій Лузанов",
                    surname: "Координатор з туризму"
                },

                {
                    image: IgorGerg,
                    name: "Ігор Гергель",
                    surname: "Координатор зі спорту"
                },
            ]
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
                <p className="team-slider-title t-center block-title">Команда <span className="light_green_color">RANGERS CAMP</span></p>
                <Slider {...settingSlide} className="m20">
                    {this.state.teams.map((teams, num) => (
                        <div className="t-center" key={num}>
                            <div className="team-photo">
                                <img src={teams.image} alt="Команда rangers camp" />
                            </div>
                            <p class="team-name">{teams.name}</p>
                            <p class="team-pos">{teams.surname}</p>
                        </div>
                    ))}
                    <div className="t-center">
                        <div className="team-photo">
                            <img src={allTeam} alt="Приеднайся до команды rangers camp" />
                        </div>
                        <p class="team-name">Приєднатися до команди</p>
                        <p class="team-pos"><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSdyPyDlsca_As0iFyDVK2E-Ebke9b1BZE6VAt8oBr2OVZ5dSw/viewform">заповнити анкету</a></p>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default TeamBlock;
