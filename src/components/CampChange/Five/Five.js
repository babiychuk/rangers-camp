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


import './Five.css';
import Icon from "./icon-five.png";

class Five extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <div className="five_page">
                        <div className="chang_block">
                            <Container >
                                <Row>
                                    <Col xs="12" sm="8" lg="6" md={{ offset: 6 }}>
                                        <div className="change_text bg_fiveText">
                                            <p className="tittle"><img src={Icon} alt="зміна Five" />ЗМІНА «FIVE»</p>
                                            <p>15 липня — 26 липня</p>
                                            <ul>
                                                <li><span>переваги зміни переваги зміни</span></li>
                                                <li><span>переваги зміни</span></li>
                                                <li><span>переваги зміни переваги зміни</span></li>
                                                <li><span>переваги зміни</span></li>
                                                <li><span>переваги зміни переваги зміни</span></li>
                                            </ul>
                                            <div className="price">15 000 ₴</div>
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
            </div >
        );
    }
}

export default Five;
