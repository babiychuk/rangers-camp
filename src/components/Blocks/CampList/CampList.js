import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './CampList.css';

const CampList = (props) => {
    return (
        <Container>
            <Row>
                <Col xs="12" md="12">
                    <p className="m20-0 t-center block-title">ПІД ЧАС ВІДПОЧИНКУ В <span className="light_green_color">ZOLOCHE RANGERS CAMP</span> ДИТИНА МАЄ МОЖЛИВІСТЬ</p>
                </Col>
                <Col xs="12" md="6">
                    <ul className="campList">
                        <li><p>знаходиться на свіжому повітрі впродовж всього дня</p></li>
                        <li><p>відпочити від гаджетів! телефони використовуються тільки для зв'язку</p></li>
                        <li><p>навчитися діяти однією командою та знаходити свільну мову з однолітками</p></li>
                    </ul>
                </Col>
                <Col xs="12" md="6">
                    <ul className="campList">
                        <li><p>проявляти ініціативу та брати на себе відповідальність за свої рішення</p></li>
                        <li><p>набути комунікативності та організаторські навички</p></li>
                        <li><p>оволодіти навичками самообслуговування та самостійності</p></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default CampList;
