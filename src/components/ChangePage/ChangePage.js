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
import TeamBlock from "../Blocks/TeamBlock/TeamBlock";
import Footer from "../Footer/Footer";

import './ChangePage.css';

import IconLife from "../CampChange/Life/icon-life.png";
import IconFood from "../CampChange/Food/icon-food.png";
import IconFive from "../CampChange/Five/icon-five.png";
import IconGame from "../CampChange/Game/icon-game.png";
import IconGalaxy from "../CampChange/Galaxy/icon-galaxy.png";

class ChangePage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <div className="page_change">
                        <div className="title title_p p-t120">
                            <p><span className="page-title white_color">Зміни</span></p>
                        </div>
                        <Container>
                            <Row className="row">
                                <Col md="12">
                                    <div className="text_in_block bg_about">
                                        <p className="">
                                            Під час кожної зміни діти засвоюють різноманітні вміння в залежності від тематики зміни.
                                            Та беруть участь у творчих майстернях створюючи собі та рідним подарунки на згадку.
                            На літо 2020 року <span className="light_green_color">Rangers Camp</span> пропонує 5 змін, які починаються
                            з 15 Червня та закінчуються 26 Серпня
                            </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <Container className="m-b20">
                            <Row >
                                <Col xs="12" md="4">
                                    <div className="change_page_text bg_lifeText">
                                        <p className="tittle"><img src={IconLife} alt="зміна Life" /> 1 ЗМІНА «LIFE»</p>
                                        <p className="t-center">15 червня — 26 червня</p>
                                        <div>
                                            <div className="price green-bg m-r-5">14 000 ₴</div>
                                            <a href="#/life">
                                                <div className="price light_yellow">Детальніше</div>
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs="12" md="4">
                                    <div className="change_page_text bg_foodText">
                                        <p className="tittle"><img src={IconFood} alt="зміна Food" /> 2 ЗМІНА «FOOD»</p>
                                        <p className="t-center">30 червня — 11 липня</p>
                                        <div>
                                            <div className="price green-bg m-r-5">14 500 ₴</div>
                                            <a href="#/food">
                                                <div className="price light_violet">Детальніше</div>
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs="12" md="4">
                                    <div className="change_page_text bg_fiveText">
                                        <p className="tittle"><img src={IconFive} alt="зміна Five" /> 3 ЗМІНА «FIVE»</p>
                                        <p className="t-center">15 липня — 26 липня</p>
                                        <div>
                                            <div className="price green-bg m-r-5">15 000 ₴</div>
                                            <a href="#/five">
                                                <div className="price light_green">Детальніше</div>
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs="12" md={{ span: 4, offset: 2 }}>
                                    <div className="change_page_text bg_gameText">
                                        <p className="tittle"><img src={IconGame} alt="зміна Game" /> 4 ЗМІНА «GAME»</p>
                                        <p className="t-center">30 липня — 10 серпня</p>
                                        <div>
                                            <div className="price green-bg m-r-5">14 000 ₴</div>
                                            <a href="#/game">
                                                <div className="price light_red">Детальніше</div>
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs="12" md="4">
                                    <div className="change_page_text bg_galaxyText">
                                        <p className="tittle"><img src={IconGalaxy} alt="зміна Galaxy" /> 5 ЗМІНА GALAXY</p>
                                        <p className="t-center">15 серпня — 26 серпня</p>
                                        <div>
                                            <div className="price green-bg m-r-5">14 000 ₴</div>
                                            <a href="#/galaxy">
                                                <div className="price light_blue">Детальніше</div>
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <CampList />
                    <CampTermsBlock />
                    <DayTime />
                    <TeamBlock />
                    <ChangeBlock />
                    <CampLocation />
                </div >
                <Footer />
            </div >
        );
    }
}

export default ChangePage;
