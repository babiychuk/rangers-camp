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

import Leonid from "../../img/team/leonid.jpg";

class Team extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <div>
                        <div className="title title_p p-t120">
                            <p><span className="title-about">Команда Zoloche Rangers Camp</span></p>
                        </div>
                    </div>
                    <Container className="m-b20">
                        <Row >
                            <Col xs="6" md="3" className="t-center">
                                <div className="team-photo">
                                    <img src={Leonid} alt="Безпека zoloche rangers camp" />
                                </div>
                                <p class="team-name">Ім'я та Прізвище</p>
                                <p class="team-pos">посада людини</p>

                            </Col>
                            <Col xs="6" md="3" className="t-center">
                                <div className="team-photo">
                                    <img src={Leonid} alt="Безпека zoloche rangers camp" />
                                </div>
                                <p class="team-name">Ім'я та Прізвище</p>
                                <p class="team-pos">посада людини</p>

                            </Col>
                            <Col xs="6" md="3" className="t-center">
                                <div className="team-photo">
                                    <img src={Leonid} alt="Безпека zoloche rangers camp" />
                                </div>
                                <p class="team-name">Ім'я та Прізвище</p>
                                <p class="team-pos">посада людини</p>

                            </Col>
                            <Col xs="6" md="3" className="t-center">
                                <div className="team-photo">
                                    <img src={Leonid} alt="Безпека zoloche rangers camp" />
                                </div>
                                <p class="team-name">Ім'я та Прізвище</p>
                                <p class="team-pos">посада людини</p>

                            </Col>                            
                        </Row>
                        <Row >
                            <Col xs="6" md="3" className="t-center">
                                <div className="team-photo">
                                    <img src={Leonid} alt="Безпека zoloche rangers camp" />
                                </div>
                                <p class="team-name">Ім'я та Прізвище</p>
                                <p class="team-pos">посада людини</p>

                            </Col>
                            <Col xs="6" md="3" className="t-center">
                                <div className="team-photo">
                                    <img src={Leonid} alt="Безпека zoloche rangers camp" />
                                </div>
                                <p class="team-name">Ім'я та Прізвище</p>
                                <p class="team-pos">посада людини</p>

                            </Col>
                            <Col xs="6" md="3" className="t-center">
                                <div className="team-photo">
                                    <img src={Leonid} alt="Безпека zoloche rangers camp" />
                                </div>
                                <p class="team-name">Ім'я та Прізвище</p>
                                <p class="team-pos">посада людини</p>

                            </Col>
                            <Col xs="6" md="3" className="t-center">
                                <div className="team-photo">
                                    <img src={Leonid} alt="Безпека zoloche rangers camp" />
                                </div>
                                <p class="team-name">Ім'я та Прізвище</p>
                                <p class="team-pos">посада людини</p>

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
