import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Header from "../Header/Header";
import CampList from "../Blocks/CampList/CampList";
import DayTime from "../Blocks/DayTime/DayTime";
import ChangeBlock from "../Blocks/ChangeBlock/ChangeBlock";
import TeamBlock from "../Blocks/TeamBlock/TeamBlock";
import CampLocation from "../Blocks/CampLocation/CampLocation";
import Footer from "../Footer/Footer";

import './Terms.css';

import Img1 from "../../img/about/01-about.png";
import Img2 from "../../img/about/02-about.png";
import Img3 from "../../img/about/03-about.png";
import Img4 from "../../img/about/04-about.png";
import Img5 from "../../img/about/05-about.png";
import Img6 from "../../img/about/06-about.png";

class Terms extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <div>
                        <div className="title title_p p-t120">
                            <p><span className="title-about">Умови та проживання в Zoloche Rangers Camp</span></p>
                        </div>
                    </div>
                    <Container className="m-b20">
                        <Row >
                            <Col xs="12" md="12" className="term-border p20-0">
                                <Row className="i-center">
                                    <Col md="3" className="term-time">
                                        <h4 className="term-tittle t-center">БЕЗПЕКА</h4>
                                        <img src={Img1} alt="Безпека zoloche rangers camp" />
                                    </Col>
                                    <Col md="9" className="t-just">
                                        Територія табору цілодобово охороняється. З окремим пунктом охорони у таборі, який регулярно відвідується Службою безпеки Котеджного містечка "Золоче".
                                        Цілодоово ведеться відеоспостереження. На територію табору можна потрапити лише за попередньою домовленістю з адміністрацією табору. У таборі діти постійно знаходяться від наглядом професійних дорослих: керівників груп, інструкторів з туризму, спорту чи плавання, керівників творчих майстерень, керівників розвиваючих програм тощо. Всі учасники застраховані, а на території табору цілодобово знаходиться медичний працівник
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" md="12" className="term-border p20-0">
                                <Row className="i-center">
                                    <Col md="3" className="term-time">
                                        <h4 className="m20-0 term-tittle t-center">ПРОЖИВАННЯ</h4>
                                        <img src={Img2} alt="ПРОЖИВАННЯ zoloche rangers camp" />
                                    </Col>
                                    <Col md="9" className="t-just">
                                        Діти проживають у дерев'яних будиночках на 4 особи. Будиночки обладнані двома ярусними ліжками шафками для зберігання одягу, комодом, крючками для верхнього одягу, та місцем для зберігання взуття. На дверях та вікні встановлено москітні сітки від комах. Розселення відбувається відповідно до віку і статі дітей
                                    </Col>

                                </Row>
                            </Col>
                        </Row>
                        <Row >
                            <Col xs="12" md="12" className="term-border p20-0">
                                <Row className="i-center">
                                    <Col md="3" className="term-time">
                                        <h4 className="m20-0 term-tittle t-center">ГІГІЄНА</h4>
                                        <img src={Img3} alt="ГІГІЄНА zoloche rangers camp" />
                                    </Col>
                                    <Col md="9" className="t-just">
                                        Зона чистоти знаходиться біля будиночків. Стаціонарні туалети та душові кабіни з цілодобовою подачею холоної та горячої води. Діти відвідують душ щоденно. Біля їдальні та житлової зони розташовано два рукомийника. Є місце для зручного ополіскування та миття ніг. У таборі є пральня, тому речі дітей легко тримати у чистоті
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row >
                            <Col xs="12" md="12" className="term-border p20-0">
                                <Row className="i-center">
                                    <Col md="3" className="term-time">
                                        <h4 className="m20-0 term-tittle t-center">ІНФРАСТРУКТУРА</h4>
                                        <img src={Img4} alt="ІНФРАСТРУКТУРА zoloche rangers camp" />
                                    </Col>
                                    <Col md="9" className="t-just">
                                        На території табору є сучасний екстрим парк: стаціонарний скай-парк з 8-ми етапів скеледром з 3-ма трасами складності троллей через озеро тир для стрільби з лука та духових трубок, байдарки. Також на території парку є ставок для риболовлі, басейн, будиночок на дереві та спортивні майданчики: футбольне та волейбольне поля, тренажерний зал під відкритим небом
                                    </Col>

                                </Row>
                            </Col>
                        </Row>
                        <Row >
                            <Col xs="12" md="12" className="term-border p20-0">
                                <Row className="i-center">
                                    <Col md="3" className="term-time">
                                        <h4 className="m20-0 term-tittle t-center">ХАРЧУВАННЯ</h4>
                                        <img src={Img5} alt="ХАРЧУВАННЯ zoloche rangers camp" />
                                    </Col>
                                    <Col md="9" className="t-just">
                                        У таборі 6-ти разове збалансоване харчування: сніданок, обід, вечеря. Другий сніданок - фрукти полуденок - кисломолочні продукти, соки, випічка вечірній чай зі смаколиками. Їжу готують професіональні шеф-кухарі згідно всіх санітарних норм. Харяування дієтичне, викоричтовуються продукти з власної еко-ферми. Харчування відбувається у приміщенні великої дерев'яної їдальні
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row >
                            <Col xs="12" md="12" className="term-border p20-0">
                                <Row className="i-center">
                                    <Col md="3" className="term-time">
                                        <h4 className="m20-0 term-tittle t-center">ВСЕБІЧНИЙ РОЗВИТОК</h4>
                                        <img src={Img6} alt="ВСЕБІЧНИЙ РОЗВИТОК zoloche rangers camp" />
                                    </Col>
                                    <Col md="9" className="t-just">
                                        Мета нашого табору - це всебічний розвиток особистості кожної дитини. Програмою табору сплановано розвиток дітей через: вміння, майстерні та тематичні навички в залежності від тематики зміни. Вміння рейнджера - це спеціальні знання, які засвоюють діти. Здобуваються вони цікаво, через практику та гру, адже все, що зроблено власноруч засвоюється набагато швидше! Майстерні - це практична діяльність під час якої діти навчаються творчим або прикладним видам діяльності. Тематичні навички - це теоретичні та практичні знання для вивчення тем, яким присвчена зміна
                                   </Col>

                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <CampList />
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

export default Terms;
