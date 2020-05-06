import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Header from "../Header/Header";
import CampList from "../Blocks/CampList/CampList";
import CampTermsBlock from "../Blocks/CampTermsBlock/CampTermsBlock";
import ChangeBlock from "../Blocks/ChangeBlock/ChangeBlock";
import DayTime from "../Blocks/DayTime/DayTime";
import CampLocation from "../Blocks/CampLocation/CampLocation";
import Footer from "../Footer/Footer";

import './Team.css';

import aleksandraEmec from "../../img/team/aleksandraEmec.jpg";
import igorVlad from "../../img/team/igorVlad.JPG";
import lizaLav from "../../img/team/lizaLav.jpg";
import daryaDem from "../../img/team/daryaDem.jpg";
import nataliZyb from "../../img/team/nataliZyb.jpg";
import anatLyz from "../../img/team/anatLyz.JPG";
import IgorGerg from "../../img/team/IgorGerg.jpg";
import allTeam from "../../img/team/allTeam.jpg";

class Team extends React.Component {
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
        return (
            <div>
                <Header />
                <div>
                    <div>
                        <div className="title title_p p-t120">
                            <p><span className="page-title">Команда Rangers Camp</span></p>
                        </div>
                    </div>
                    <Container className="m-b20">
                        <Row >
                            {this.state.teams.map((teams, num) => (
                                <Col xs="6" md="3" className="t-center" key={num}>
                                    <div className="team-photo">
                                        <img src={teams.image} alt="Команда rangers camp" />
                                    </div>
                                    <p class="team-name">{teams.name}</p>
                                    <p class="team-pos">{teams.surname}</p>
                                </Col>
                            ))}
                            <Col xs="6" md="3" className="t-center">
                                <div className="team-photo">
                                    <img src={allTeam} alt="Безпека rangers camp" />
                                </div>
                                <p class="team-name">Приєднатися до команди</p>
                                <p class="team-pos"><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSdyPyDlsca_As0iFyDVK2E-Ebke9b1BZE6VAt8oBr2OVZ5dSw/viewform">заповнити анкету</a></p>
                            </Col>
                        </Row>
                    </Container>
                    <CampTermsBlock />
                    <CampList />
                    <DayTime />
                    <ChangeBlock />
                    <CampLocation />
                </div >
                <Footer />
            </div >
        );
    }
}

export default Team;
