import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import './CampChange.css';

import Img1 from "../../../img/changeCamp/01-change.png";
import Img2 from "../../../img/changeCamp/02-change.png";
import Img3 from "../../../img/changeCamp/03-change.png";
import Img4 from "../../../img/changeCamp/04-change.png";
import Img5 from "../../../img/changeCamp/05-change.png";




class CampChange extends React.Component {
    render() {
        return (
            <div className="block_change" name="change">

                <div>
                    <div className="title title_p">
                        <p><span className="light_green_color">ЗМІНИ</span></p>
                    </div>
                </div>
                <Container>
                    <Row className="row">
                        <Col md="12">
                            <div className="text_in_block bg_about">
                                <p className="">
                                    Під час кожної зміни діти засвоюють різноманітні вміння в залежності від тематики зміни.
                                    Та беруть участь у творчих майстернях створюючи собі та рідним подарунки на згадку.
                            На літо 2020 року <span className="light_green_color">Zoloche Rangers Camp</span> пропонує 5 змін, які починаються
                            з 15 Червня та закінчуються 26 Серпня
                            </p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Row className="m0-5-20">
                    <Col md="12">
                        <CardDeck>
                            <Card className="light_yellow p20-0">
                                <Card.Img variant="top" src={Img1} />
                                <Card.Body>
                                    <Card.Title>
                                        <a href="#/life">
                                            <div className="btn btn-outline light_yellow">Детальніше</div>
                                        </a>
                                    </Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="light_violet p20-0">
                                <Card.Img variant="top" src={Img2} />
                                <Card.Body>
                                    <Card.Title>
                                        <a href="#/food">
                                            <div className="btn btn-outline light_violet">Детальніше</div>
                                        </a>
                                    </Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="light_green p20-0">
                                <Card.Img variant="top" src={Img3} />
                                <Card.Body>
                                    <Card.Title>
                                        <a href="#/five">
                                            <div className="btn btn-outline light_green">Детальніше</div>
                                        </a>
                                    </Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="light_red p20-0">
                                <Card.Img variant="top" src={Img4} />
                                <Card.Body>
                                    <Card.Title>
                                        <a href="#/game">
                                            <div className="btn btn-outline light_red">Детальніше</div>
                                        </a>
                                    </Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="light_blue p20-0">
                                <Card.Img variant="top" src={Img5} />
                                <Card.Body>
                                    <Card.Title>
                                        <a href="#/galaxy">
                                            <div className="btn btn-outline light_blue">Детальніше</div>
                                        </a>
                                    </Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CampChange;
