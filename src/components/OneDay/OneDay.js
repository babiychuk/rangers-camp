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

import './OneDay.css';

import Img200 from "../../img/img200.png";

class OneDay extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <div>
                        <div className="title title_p p-t120">
                            <p><span className="title-about">Один день в Zoloche Rangers Camp</span></p>
                        </div>
                    </div>
                    <Container className="m-b20">
                        <Row >
                            <Col xs="12" md="6" className="term-border p20-0">
                                <Row className="i-center">
                                    <Col md="6" className="term-time">
                                        <img src={Img200} alt="Безпека zoloche rangers camp" />
                                        <div className="time-wrap"> 08:00-09:25</div>
                                    </Col>
                                    <Col md="6" className="t-just">
                                        <p className="term-title">Подъем, зарядка, фитнес/йога</p>
                                        <p>Каждый день в лагере начинается правильно - с утренней зарядки, йоги на берегу Черного моря или разминочных весёлых танцев.</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs="12" md="6" className="term-border p20-0">
                                <Row className="i-center">
                                    <Col md="6" className="term-time">
                                        <img src={Img200} alt="ПРОЖИВАННЯ zoloche rangers camp" />
                                        <div className="time-wrap"> 09:30-12:45</div>
                                    </Col>
                                    <Col md="6" className="t-just">
                                        <p className="term-title">Море / басейн, практичні заняття</p>
                                        <p>По утрам мы кормим детей максимально сытно, так как им предстоит целый день активностей и занятий на свежем воздухе. </p>
                                    </Col>

                                </Row>
                            </Col>
                        </Row> 
                        <Row >
                            <Col xs="12" md="6" className="term-border p20-0">
                                <Row className="i-center">
                                    <Col md="6" className="term-time">
                                        <img src={Img200} alt="Безпека zoloche rangers camp" />
                                        <div className="time-wrap"> 13:00-16:20</div>
                                    </Col>
                                    <Col md="6" className="t-just">
                                        <p className="term-title">Обід, тиха година, полуденок</p>
                                        <p>Каждый день в лагере начинается правильно - с утренней зарядки, йоги на берегу Черного моря или разминочных весёлых танцев.</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs="12" md="6" className="term-border p20-0">
                                <Row className="i-center">
                                    <Col md="6" className="term-time">
                                        <img src={Img200} alt="ПРОЖИВАННЯ zoloche rangers camp" />
                                        <div className="time-wrap">16:30-19:00</div>
                                    </Col>
                                    <Col md="6" className="t-just">
                                        <p className="term-title">Пляж / басейн, розвиваючі студії</p>
                                        <p>По утрам мы кормим детей максимально сытно, так как им предстоит целый день активностей и занятий на свежем воздухе. </p>
                                    </Col>

                                </Row>
                            </Col>
                        </Row> 
                        <Row >
                            <Col xs="12" md="6" className="term-border p20-0">
                                <Row className="i-center">
                                    <Col md="6" className="term-time">
                                        <img src={Img200} alt="Безпека zoloche rangers camp" />
                                        <div className="time-wrap"> 19:30-20:45</div>
                                    </Col>
                                    <Col md="6" className="t-just">
                                        <p className="term-title">Вечеря, дискотека / кінотеатр / фірмова вечірка</p>
                                        <p>Каждый день в лагере начинается правильно - с утренней зарядки, йоги на берегу Черного моря или разминочных весёлых танцев.</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs="12" md="6" className="term-border p20-0">
                                <Row className="i-center">
                                    <Col md="6" className="term-time">
                                        <img src={Img200} alt="ПРОЖИВАННЯ zoloche rangers camp" />
                                        <div className="time-wrap"> 21:00-22:00</div>
                                    </Col>
                                    <Col md="6" className="t-just">
                                        <p className="term-title">Друга вечеря, багаття, відбій</p>
                                        <p>По утрам мы кормим детей максимально сытно, так как им предстоит целый день активностей и занятий на свежем воздухе. </p>
                                    </Col>

                                </Row>
                            </Col>
                        </Row>                        
                    </Container>
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

export default OneDay;
