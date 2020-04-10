import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import Video from "../../img/fonVideo.mp4";

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
                    <h1>Дитячий лагерь</h1>
                    <h2>Zoloche Rangers Camp</h2>
                    <Row>
                        <Col sm={{order: 12 }}>
                            <div className="text_in_header bg_headerText">
                                <p className="">
                                Місце ексклюзивного відпочинку. Пригоди гарантовано!
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
