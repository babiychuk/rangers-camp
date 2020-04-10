import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './DayTime.css';

const DayTime = (props) => {
    return (
        <Container className="m-b20">
            <Row >
                <Col xs="12" md="12">
                    <h4 className="m20-0 day-tittle">РОЗКЛАД ДНЯ</h4>
                </Col>
                <Col xs="12" md="4" className="day-border">
                    <Row>
                        <Col md="4" className="day-time">
                            08:00 09:25
                                </Col>
                        <Col md="8">
                            Підготовка до подій дня: підйом, зарядка на березі моря, фітнес / йога, сніданок
                                </Col>
                    </Row>
                </Col>
                <Col xs="12" md="4" className="day-border">
                    <Row>
                        <Col md="4" className="day-time">
                            09:30 12:45
                                </Col>
                        <Col md="8">
                            Море / басейн, практичні заняття з акторської майстерності, тележурналістиці і ораторської майстерності
                                </Col>
                    </Row>
                </Col>
                <Col xs="12" md="4" className="day-border">
                    <Row>
                        <Col md="4" className="day-time">
                            13:00 16:20
                                </Col>
                        <Col md="8">
                            Обід, тиха година, полуденок
                                </Col>
                    </Row>
                </Col>
                <Col xs="12" md="4" className="day-border">
                    <Row>
                        <Col md="4" className="day-time">
                            16:30 19:00
                                </Col>
                        <Col md="8">
                            Пляж / басейн, розвиваючі студії
                                </Col>
                    </Row>
                </Col>
                <Col xs="12" md="4" className="day-border">
                    <Row>
                        <Col md="4" className="day-time">
                            19:30 20:45
                                </Col>
                        <Col md="8">
                            Вечеря, дискотека / кінотеатр / фірмова вечірка
                                </Col>
                    </Row>
                </Col>
                <Col xs="12" md="4" className="day-border">
                    <Row>
                        <Col md="4" className="day-time">
                            21:00 22:00
                                </Col>
                        <Col md="8">
                            Друга вечеря, багаття, відбій
                                </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default DayTime;
