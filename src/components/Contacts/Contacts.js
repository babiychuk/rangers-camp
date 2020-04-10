import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Header from "../Header/Header";
import CampList from "../Blocks/CampList/CampList";
import CampTermsBlock from "../Blocks/CampTermsBlock/CampTermsBlock";
import ChangeBlock from "../Blocks/ChangeBlock/ChangeBlock";
import DayTime from "../Blocks/DayTime/DayTime";
import CampLocation from "../Blocks/CampLocation/CampLocation";
import Footer from "../Footer/Footer";

import './Contacts.css';

import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

class Contacts extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <div>
                        <div className="title title_p p-t120">
                            <p><span className="title-about">Контакти</span></p>
                        </div>
                    </div>
                    <Container className="m-b20">
                        <Row >
                            <Col md="6">
                                <div className="contact_txt">
                                    <ul>
                                        <li className="contact_title">Табір</li>
                                        <li><FaMapMarkedAlt /> Київська область, Бориспільський р-н,</li>
                                        <li>с. Вишеньки, Котеджне містечко «Zoloche»</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="contact_txt">
                                    <ul>
                                        <li className="contact_title">Офіс</li>
                                        <li><FaMapMarkedAlt /> м. Київ, вулиця Драгоманова, 1м</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="contact_txt">
                                    <ul>
                                        <li><IoIosCall /> <a href="tel:+380509410496">+38 (050) 94 104 96</a></li>
                                        <li><IoIosMail /> rangers.camp.park@gmail.com</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="contact_item">
                                    <a href="https://www.facebook.com/camprangers/" target="_blank" rel="noopener noreferrer">
                                        <button className="soc_btn_white">
                                            <FaFacebookSquare />
                                        </button>
                                    </a>
                                    <a href="https://www.instagram.com/rangers_camp/" target="_blank" rel="noopener noreferrer">
                                        <button className="soc_btn_white">
                                            <FaInstagram />
                                        </button>
                                    </a>
                                    <a href="https://www.youtube.com/channel/UC-W6faXsXGk6ebSANAGb3SA"
                                        target="_blank" rel="noopener noreferrer">
                                        <button className="soc_btn_white">
                                            <FaYoutube />
                                        </button>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <CampLocation />
                    <CampTermsBlock />
                    <CampList />
                    <DayTime />
                    <ChangeBlock />
                </div >
                <Footer />
            </div >
        );
    }
}

export default Contacts;
