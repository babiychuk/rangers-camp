import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Img1 from "../../../img/about/01-about.png";
import Img2 from "../../../img/about/02-about.png";
import Img3 from "../../../img/about/03-about.png";
import Img4 from "../../../img/about/04-about.png";
import Img5 from "../../../img/about/05-about.png";
import Img6 from "../../../img/about/06-about.png";

import './CampTermsBlock.css';

class CampTermsBlock extends React.Component {
    render() {
        return (

            <Row className="m0-5 terms-block">
                <Col md="2" xs="6" className="t-center">
                    <div className="">
                        <img src={Img1} alt="Preview" className="terms-img"/>
                        <div className="terms_tittle">Безпека</div>
                        <p className="terms_text">Територія табору цілодобово охороняється з окремим пунктом охорони у таборі</p>
                    </div>
                </Col>
                <Col md="2" xs="6" className="t-center">
                    <div className="">
                        <img src={Img2} alt="Preview" className="terms-img"/>
                        <div className="terms_tittle">Проживання</div>
                        <p className="terms_text">Діти проживають у деревяних будиночках по 4 особи. Будинки обладнані двома двоярусними ліжками</p>
                    </div>
                </Col>
                <Col md="2" xs="6" className="t-center">
                    <div className="">
                        <img src={Img3} alt="Preview" className="terms-img"/>
                        <div className="terms_tittle">Гігієна</div>
                        <p className="terms_text">Зона чистоти знаходиться біля будиночків. Стаціонарні туалети та щоденні душові кабінки</p>
                    </div>
                </Col>
                <Col md="2" xs="6" className="t-center">
                    <div className="">
                        <img src={Img4} alt="Preview" className="terms-img"/>
                        <div className="terms_tittle">Інфраструктура</div>
                        <p className="terms_text">На території табору є сучасний екстрим парк, тир для стрильби з луком, байдарки</p>
                    </div>
                </Col>
                <Col md="2" xs="6" className="t-center">
                    <div className="">
                        <img src={Img5} alt="Preview" className="terms-img"/>
                        <div className="terms_tittle">Харчування</div>
                        <p className="terms_text">У таборі 6-ти разове збалансоване харчування</p>
                    </div>
                </Col>
                <Col md="2" xs="6" className="t-center">
                    <div className="">
                        <img src={Img6} alt="Preview" className="terms-img"/>
                        <div className="terms_tittle">Всебічний розвиток</div>
                        <p className="terms_text">Мета нашого табору це всебічний розвиток особистості кожної дитини</p>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default CampTermsBlock;
