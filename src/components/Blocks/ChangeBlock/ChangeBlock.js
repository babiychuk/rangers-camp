import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import './ChangeBlock.css';


import Img1 from "../../../img/changeCamp/01-change.png";
import Img2 from "../../../img/changeCamp/02-change.png";
import Img3 from "../../../img/changeCamp/03-change.png";
import Img4 from "../../../img/changeCamp/04-change.png";
import Img5 from "../../../img/changeCamp/05-change.png";

class ChangeBlock extends React.Component {
    render() {
        return (
            <Row className="m0-5-20">
                <Col md="12">
                    <CardDeck>
                        <Card className="bg-none p20-0">
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
                        <Card className="bg-none p20-0">
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
                        <Card className="bg-none p20-0">
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
                        <Card className="bg-none p20-0">
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
                        <Card className="bg-none p20-0">
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
        );
    }
}

export default ChangeBlock;
