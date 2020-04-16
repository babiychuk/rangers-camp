import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from "../../Header/Header";
import CampList from "../../Blocks/CampList/CampList";
import CampTermsBlock from "../../Blocks/CampTermsBlock/CampTermsBlock";
import DayTime from "../../Blocks/DayTime/DayTime";
import ChangeBlock from "../../Blocks/ChangeBlock/ChangeBlock";
import TeamBlock from "../../Blocks/TeamBlock/TeamBlock";
import CampLocation from "../../Blocks/CampLocation/CampLocation";
import Footer from "../../Footer/Footer";


import './Game.css';
import Icon from "./icon-game.png";

class Game extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <div className="game_page">
                        <div className="chang_block">
                            <Container >
                                <Row>
                                    <Col xs="12" sm="8" lg="6" md={{ offset: 6 }}>
                                        <div className="change_text bg_gameText">
                                            <p className="tittle"><img src={Icon} alt="зміна Game"/> 4 ЗМІНА «GAME»</p>
                                            <p>30 липня — 10 серпня</p>
                                            <ul>
                                                <li><span>переваги зміни переваги зміни</span></li>
                                                <li><span>переваги зміни</span></li>
                                                <li><span>переваги зміни переваги зміни</span></li>
                                                <li><span>переваги зміни</span></li>
                                                <li><span>переваги зміни переваги зміни</span></li>
                                            </ul>
                                            <div className="price">14 000 ₴</div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>                    
                    <CampList />
                    <CampTermsBlock />
                    <DayTime />
                    <ChangeBlock />
                    <TeamBlock />
                    <CampLocation />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Game;
