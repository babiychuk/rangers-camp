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

import Img1 from "../../img/terms/01-about.png";
import Img2 from "../../img/terms/02-about.png";
import Img3 from "../../img/terms/03-about.png";
import Img4 from "../../img/terms/04-about.png";
import Img5 from "../../img/terms/05-about.png";
import Img6 from "../../img/terms/06-about.png";

class Terms extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <div>
                        <div className="title title_p p-t120">
                            <p><span className="page-title">УМОВИ RANGERS CAMP</span></p>
                        </div>
                    </div>
                    <Container className="m-b20">
                        <Row >
                            <Col xs="12" md="12" className="m-b20">
                                <Row className="i-center">
                                    <Col md="3" className="term-img">
                                        <h4 className="term-tittle t-center">БЕЗПЕКА</h4>
                                        <img src={Img1} alt="Безпека rangers camp" />
                                    </Col>
                                    <Col md="9" className="green_color">
                                        <div className="t-indent">Територія табору цілодобово охороняється. З окремим пунктом охорони у таборі, який регулярно відвідується Службою безпеки Котеджного містечка "Золоче".</div>
                                        <div className="t-indent">Цілодобово ведеться відеоспостереження. На територію табору можна потрапити лише за попередньою домовленістю з адміністрацією табору.</div>
                                        <div className="t-indent">У таборі діти постійно знаходяться під наглядом професійних дорослих: керівників груп, інструкторів з туризму, спорту чи плавання, керівників творчих майстерень, керівників розвиваючих програм тощо.</div>
                                        <div className="t-indent">Всі учасники застраховані, а на території табору цілодобово знаходиться медичний працівник.</div>
                                        <div className="t-indent">Діти об’єднуються у різновікові групи по 12-15 осіб, з групою постійно працює два керівники.</div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row >
                            <Col xs="12" md="12" className="term-border m-b20">
                                <Row className="i-center">
                                    <Col md="3" className="term-img">
                                        <h4 className="m20-0 term-tittle t-center">ХАРЧУВАННЯ</h4>
                                        <img src={Img5} alt="ХАРЧУВАННЯ rangers camp" />
                                    </Col>
                                    <Col md="9" className="green_color">
                                    <div className="t-indent">У таборі 6-ти разове збалансоване харчування: сніданок, обід, вечеря. Другий сніданок – фрукти, полуденок - кисломолочні продукти, соки, випічка та вечірній чай зі смаколиками.</div>
                                    <div className="t-indent">Їжу готують професіональні шеф-кухарі згідно всіх санітарних норм у Zoloche International School,  харчування дієтичне, використовуються продукти високої якості. Порції посилені у зв’язку з активністю дітей у природних умовах.</div>
                                    <div className="t-indent">Харчування відбувається у приміщенні великої дерев'яної їдальні, діти за бажанням долучаються до чергування, а власний стіл тримають у чистоті самостійно.</div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" md="12" className="term-border m-b20">
                                <Row className="i-center">
                                    <Col md="3" className="term-img">
                                        <h4 className="m20-0 term-tittle t-center">ПРОЖИВАННЯ</h4>
                                        <img src={Img2} alt="ПРОЖИВАННЯ rangers camp" />
                                    </Col>
                                    <Col md="9" className="green_color">
                                    <div className="t-indent">Діти проживають у дерев'яних будиночках по 4-ри особи, відповідно до віку та статі.</div>
                                    <div className="t-indent">Будиночки облаштовані двома двоярусними ліжками, шафками для зберігання одягу та комодом.</div>
                                    <div className="t-indent">На стінах крючки та поличка для взуття. У будиночку є розетки.</div>
                                    <div className="t-indent">На дверях та вікні встановлено москітні сітки від комах.</div>
                                    </Col>

                                </Row>
                            </Col>
                        </Row>
                        <Row >
                            <Col xs="12" md="12" className="term-border m-b20">
                                <Row className="i-center">
                                    <Col md="3" className="term-img">
                                        <h4 className="m20-0 term-tittle t-center">ГІГІЄНА</h4>
                                        <img src={Img3} alt="ГІГІЄНА rangers camp" />
                                    </Col>
                                    <Col md="9" className="green_color">
                                    <div className="t-indent">Зона чистоти знаходиться біля будиночків (1 хвилина вільної ходьби від будиночків).</div>
                                    <div className="t-indent"> Облаштовано дві гігієнічні зони, для хлопчиків та дівчаток. На кожній знаходиться два туалети та два душа.</div>
                                    <div className="t-indent">Стаціонарні туалети (чаша Генуя) облаштовано умивальником з милом, туалетним папером та одноразовими рушниками.</div>
                                    <div className="t-indent">Душові кабіни з цілодобовою подачею холодної та гарячої води. Діти відвідують душ щоденно після басейну або за потребою.</div>
                                    <div className="t-indent">Біля їдальні та житлової зони розташовано два рукомийники.</div>
                                    <div className="t-indent">Облаштовано місце для зручного ополіскування та миття ніг. У таборі є пральня, тому речі дітей легко тримати у чистоті.</div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row >
                            <Col xs="12" md="12" className="term-border m-b20">
                                <Row className="i-center">
                                    <Col md="3" className="term-img">
                                        <h4 className="m20-0 term-tittle t-center">ІНФРАСТРУКТУРА</h4>
                                        <img src={Img4} alt="ІНФРАСТРУКТУРА rangers camp" />
                                    </Col>
                                    <Col md="9" className="green_color">
                                    <div className="t-indent">На території табору є сучасний екстрим парк: стаціонарний скай-парк з 8-ми етапів, скеледром з 3-ма трасами складності, троллей через озеро, тир для стрільби з лука та духових трубок, байдарки.</div>
                                    <div className="t-indent">Також на території є ставок для риболовлі на навчанню веслуванню на байдарках, басейн, будиночок на дереві для ігор та квестів, спортивні майданчики: футбольне та волейбольне поля, тренажерний зал під відкритим небом.</div>
                                    <div className="t-indent">Велика територія для прогулянок та відпочинку.</div>
                                    </Col>

                                </Row>
                            </Col>
                        </Row>
                        <Row >
                            <Col xs="12" md="12" className="term-border m-b20">
                                <Row className="i-center">
                                    <Col md="3" className="term-img">
                                        <h4 className="m20-0 term-tittle t-center">РОЗВИТОК</h4>
                                        <img src={Img6} alt="ВСЕБІЧНИЙ РОЗВИТОК rangers camp" />
                                    </Col>
                                    <Col md="9" className="green_color">
                                    <div className="t-indent"> Мета нашого табору - це всебічний розвиток особистості кожної дитини.</div>
                                    <div className="t-indent"> Програмою табору сплановано розвиток дітей через: вміння, майстерні та тематичні навички в залежності від тематики зміни.</div>
                                    <div className="t-indent">Вміння рейнджера - це спеціальні знання, які засвоюють діти. Здобуваються вони цікаво, через практику та гру, адже все, що зроблено власноруч засвоюється набагато швидше!</div>
                                    <div className="t-indent">Майстерні - це практична діяльність під час якої діти навчаються творчим або прикладним видам діяльності.</div>
                                    <div className="t-indent">Тематичні навички - це теоретичні та практичні знання для вивчення тем, яким присвячена зміна.</div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <TeamBlock />
                    <CampList />
                    <DayTime />
                    <ChangeBlock />
                    <CampLocation />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Terms;
