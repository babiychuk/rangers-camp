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

import './Life.css';
import Icon from "./icon-life.png";

class Life extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <div className="life_page">
                        <div className="chang_block">
                            <Container >
                                <Row>
                                    <Col xs="12" sm="8" lg="6" md={{ offset: 6 }}>
                                        <div className="change_text bg_lifeText">

                                            <p className="tittle"><img src={Icon} alt="зміна Life" /> 1 ЗМІНА «LIFE»</p>
                                            <p>15 червня — 26 червня</p>
                                            <ul>
                                                <li><span>Практикум з надання першої долікарської допомоги</span></li>
                                                <li><span>Навчання та рибна ловля у табор</span></li>
                                                <li><span>Зустріч з мандрівником Скаутом</span></li>
                                                <li><span>Ночівля в наметах</span></li>
                                                <li><span>Зустріч світанку</span></li>
                                            </ul>
                                            <div className="price">14 000 ₴</div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12">
                                        <div className="change_text bg_lifeText">
                                            <div className="t-indent">Зміна «LIFE» присвячена всім Рейнджерським вмінням, а це означає бути готовим до будь-якої ситуації. Ми навчимося слухати та чути ліс, дивитися та бачити сліди, розкривати таємниці світанків.</div>
                                            <div className="t-indent">А як Ви реагуєте на екстремальні ситуації? Ми навчимо Вас, як діяти, що брати з собою та як надавати першу долікарську допомогу.</div>
                                            <div className="t-indent">Ви відчуєте повне єднання з природою, зануритесь у голоси природи, прокинувшись зранку у наметі та переконаєтеся, що найкращі вечори —
                                        це вечори біля багаття з друзями.</div>
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

export default Life;
