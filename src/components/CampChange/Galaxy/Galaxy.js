import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from "../../Header/Header";
import CampList from "../../Blocks/CampList/CampList";
import CampTermsBlock from "../../Blocks/CampTermsBlock/CampTermsBlock";
import DayTime from "../../Blocks/DayTime/DayTime";
import ChangeBlock from "../../Blocks/ChangeBlock/ChangeBlock";
import TeamBlock from "../../Blocks/TeamBlock/TeamBlock";
import CampLocation from "../../Blocks/CampLocation/CampLocation";
import Footer from "../../Footer/Footer";


import './Galaxy.css';
import Icon from "./icon-galaxy.png";

class Galaxy extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <div className="galaxy_page">
                        <div className="chang_block">
                            <Container >
                                <Row>
                                    <Col xs="12" sm="8" lg="6" md={{ offset: 6 }}>
                                        <div className="change_text bg_galaxyText">
                                            <i></i>
                                            <p className="tittle"><img src={Icon} alt="зміна Galaxy" /> 5 ЗМІНА GALAXY</p>
                                            <p>15 серпня — 26 серпня</p>
                                            <ul>
                                                <li><span>Розглянемо зірки та планети</span></li>
                                                <li><span>Дізнаємося як зберегти планету здоровою</span></li>
                                                <li><span>Зустрінемося з еко-обізнаними людьми та інопланетними жителями</span></li>
                                                <li><span>Проведемо експерименти</span></li>
                                                <li><span>Дізнаємося як світили зірки під час нашої зустрічі</span></li>
                                            </ul>
                                            <div className="price">14 000 ₴</div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12">
                                        <div className="change_text bg_galaxyText">
                                            <div className="t-indent">Зміна «GALAXY» присвячена нашій планеті та всесвіту навколо нас.</div>
                                            <div className="t-indent">Ми творці власного майбутнього тому розпочнемо з турботи про нашу планету, дізнаємося про екологію та сортування сміття.</div>
                                            <div className="t-indent">Відправимося у космос, дізнаємося про галактики та розглянемо зірки та планети власними оченятами.</div>
                                            <div className="t-indent">Зустрінемося з цікавими людьми, які знають про Землю та галактики, а можливо нам зустрінуться інопланетні жителі.</div>
                                            <div className="t-indent">А також зробимо скафандр, проведемо досліди с кинем та запустимо у небо повітряних зміїв.</div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <CampList />
                    <CampTermsBlock />
                    <DayTime />
                    <ChangeBlock />
                    <TeamBlock />
                    <CampLocation />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Galaxy;
