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
                                                <li><span>Пограємо в ігри народів світу</span></li>
                                                <li><span>Пограємо в ігри в які грали наші батьки</span></li>
                                                <li><span>Зустрінемося з творцями ігор та ігро-майстрами</span></li>
                                                <li><span>Навчимося придумувати власні ігри</span></li>
                                                <li><span>Зіграємо у велику Рейнджерську монополію</span></li>
                                            </ul>
                                            <div className="price">14 000 ₴</div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12">
                                        <div className="change_text bg_gameText">
                                            <div className="t-indent">Зміна «GAME» присвячена різноманітним іграм. Ми перенесемо комп’ютерні ігри у реальність, дізнаємося ігри в які грали наші батьки та створимо власні.</div>
                                            <div className="t-indent">Познайомимося з людьми, які створюють ігри та пограємо з найкращими ігро-майстрами.</div>
                                            <div className="t-indent">Під час економічної гри ми створимо Рейнджерську монополію, відкриємо бізнес та навчимося керувати своїм капіталом.</div>
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
