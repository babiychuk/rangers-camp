import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Img1 from "../../../img/terms/01-about.png";
import Img2 from "../../../img/terms/02-about.png";
import Img3 from "../../../img/terms/03-about.png";
import Img4 from "../../../img/terms/04-about.png";
import Img5 from "../../../img/terms/05-about.png";
import Img6 from "../../../img/terms/06-about.png";

import './CampTermsBlock.css';

class CampTermsBlock extends React.Component {
    render() {
        return (

            <Row className="m0-5 terms-block">
                <Col md="2" xs="6" className="t-center">
                    <div className="">
                        <img src={Img1} alt="Preview" className="terms-img" />
                        <div className="terms_tittle">Безпека</div>
                        <p className="terms_text">цілодобова охорона <br/>
                        та відеонагляд</p>
                    </div>
                </Col>
                <Col md="2" xs="6" className="t-center">
                    <div className="">
                        <img src={Img5} alt="Preview" className="terms-img" />
                        <div className="terms_tittle">Харчування</div>
                        <p className="terms_text">6-ти разове <br/>
                        харчування</p>
                    </div>
                </Col>
                <Col md="2" xs="6" className="t-center">
                    <div className="">
                        <img src={Img2} alt="Preview" className="terms-img" />
                        <div className="terms_tittle">Проживання</div>
                        <p className="terms_text">у дерев’яних <br/>
                        будиночках</p>
                    </div>
                </Col>
                <Col md="2" xs="6" className="t-center">
                    <div className="">
                        <img src={Img3} alt="Preview" className="terms-img" />
                        <div className="terms_tittle">Гігієна</div>
                        <p className="terms_text">Зона чистоти біля <br/> 
                        будиночків</p>
                    </div>
                </Col>
                <Col md="2" xs="6" className="t-center">
                    <div className="">
                        <img src={Img4} alt="Preview" className="terms-img" />
                        <div className="terms_tittle">Інфраструктура</div>
                        <p className="terms_text">басейн, озеро та <br/>
                        екстрим парк</p>
                    </div>
                </Col>
                <Col md="2" xs="6" className="t-center">
                    <div className="">
                        <img src={Img6} alt="Preview" className="terms-img" />
                        <div className="terms_tittle">Розвиток</div>
                        <p className="terms_text">всебічний розвиток <br/> 
                        собистості кожної дитини</p>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default CampTermsBlock;
