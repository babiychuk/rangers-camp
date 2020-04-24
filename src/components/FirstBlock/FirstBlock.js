import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import Video from "../../img/camp.mp4";

import './FirstBlock.css';

class FirstBlock extends React.Component {
    render() {
        return (
            <div className="first_block">
                <div className="home-video-wrapper">
                    <video id="myvideo" preload="auto" autoPlay="autoPlay" loop="loop" muted="muted">
                        <source src={Video} type="video/mp4" />
                    </video>
                </div>

                <div className="header_block">
                    <h1>Лiтнiй табiр</h1>
                    <h2>Rangers Camp</h2>
                    <Row>
                        <Col sm={{order: 12 }}>
                            <div className="text_in_header">
                                <p className="">
                                Місце ексклюзивного відпочинку та щасливих дітей
						        </p>
                            </div>                        
                        </Col>
                    </Row>                   
                </div>
            </div>
        );
    }
}

export default FirstBlock;
