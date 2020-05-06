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


import './Food.css';
import Icon from "./icon-food.png";

class Food extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <div className="food_page">
                        <div className="chang_block">
                            <Container >
                                <Row>
                                    <Col xs="12" sm="8" lg="6" md={{ offset: 6 }}>
                                        <div className="change_text bg_foodText">
                                            <p className="tittle"><img src={Icon} alt="зміна Food" /> 2 ЗМІНА «FOOD»</p>
                                            <p>30 червня — 11 липня</p>
                                            <ul>
                                                <li><span>Практика приготування різних страв</span></li>
                                                <li><span>«Коктейль паті» біля басейну</span></li>
                                                <li><span>Кулінарний рекорд з приготування найбільшої страви</span></li>
                                                <li><span>Зустріч з фахівцем здорового харчування</span></li>
                                                <li><span>«Grill party»</span></li>
                                            </ul>
                                            <div className="price">14 500 ₴</div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12">
                                        <div className="change_text bg_foodText">
                                            <div className="t-indent">Зміна «FOOD» присвячена кулінарним шедеврам, ми дізнаємося про корисні сніданки та поставимо рекорд з приготування найбільшої страви.</div>
                                            <div className="t-indent">Минулого року ми практикувалися у приготуванні десертів, а в цьому році будемо підвищувати свої навички у приготуванні основних страв.</div>
                                            <div className="t-indent">Учасники зміни візьмуть участь у «Grill party», «Коктейль паті» біля басейну та позмагаються у підготовці «Званої вечері».</div>
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

export default Food;
