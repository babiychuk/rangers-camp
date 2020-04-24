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
                    <p className="m20-0 t-center block-title">У ТАБОРI ДИТИНА МАЄ МОЖЛИВIСТЬ</p>
                </Col>
                <Col xs="12" md="6">
                    <ul className="campList">
                        <li><p>бути на свіжому повітрі впродовж всього дня</p></li>
                        <li><p>відпочити від гаджетів, а телефони використовувати тільки для зв'язку</p></li>
                        <li><p>навчитися діяти однією командою та знаходити спільну мову з дітьми різного віку</p></li>
                    </ul>
                </Col>
                <Col xs="12" md="6">
                    <ul className="campList">
                        <li><p>проявити ініціативу та брати на себе відповідальність за власні рішення</p></li>
                        <li><p>набути комунікативні та організаторські навички</p></li>
                        <li><p>оволодіти навичками самообслуговування та самостійності</p></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default CampList;
