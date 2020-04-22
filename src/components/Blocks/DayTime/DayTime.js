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
                    <p className="m20-0 day-tittle block-title">РОЗПОРЯДОК ДНЯ</p>
                </Col>
                <Col xs="12" md="4" className="day-border">
                    <Row>
                        <Col md="4" className="day-time">
                            08:00 10:00
                                </Col>
                        <Col md="8">
                        Підготовка до подій дня: підйом, руханка, сніданок, шикування.
                                </Col>
                    </Row>
                </Col>
                <Col xs="12" md="4" className="day-border">
                    <Row>
                        <Col md="4" className="day-time">
                            10:15 13:45
                                </Col>
                        <Col md="8">
                        Майстерні, спортивні ігри, туристичні випробування
                                </Col>
                    </Row>
                </Col>
                <Col xs="12" md="4" className="day-border">
                    <Row>
                        <Col md="4" className="day-time">
                            14:00 15:25
                                </Col>
                        <Col md="8">
                        Обід, тиха година, полуденок
                                </Col>
                    </Row>
                </Col>
                <Col xs="12" md="4" className="day-border">
                    <Row>
                        <Col md="4" className="day-time">
                            16:00 19:00
                                </Col>
                        <Col md="8">
                        Басейн, активності, спортивні змагання, душ. Загонова діяльність, загальнотаборовий захід.
                                </Col>
                    </Row>
                </Col>
                <Col xs="12" md="4" className="day-border">
                    <Row>
                        <Col md="4" className="day-time">
                            19:00 21:45
                                </Col>
                        <Col md="8">
                        Вечеря. Вечірні активності. Захід. Адехі. Дискотека / кінозал
                                </Col>
                    </Row>
                </Col>
                <Col xs="12" md="4" className="day-border">
                    <Row>
                        <Col md="4" className="day-time">
                            21:45 22:30
                                </Col>
                        <Col md="8">
                        Друга вечеря, підсумки дня у загонах, відбій
                                </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default DayTime;
