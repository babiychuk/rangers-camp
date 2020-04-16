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
import TeamBlock from "../Blocks/TeamBlock/TeamBlock";
import Footer from "../Footer/Footer";

import './FeedBack.css';
class FeedBack extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <div>
                        <div className="title title_p p-t120">
                            <p><span className="page-title">Відгуки про Rangers Camp</span></p>
                        </div>
                    </div>
                    <Container className="m-b20">
                        <Row >
                            <Col xs="12" md="6" className="p20-0 feedback-text">
                                Потрібні якісь відгуки!
                            </Col>
                        </Row>
                    </Container>
                    <CampList />
                    <CampTermsBlock />
                    <DayTime />
                    <TeamBlock />
                    <ChangeBlock />
                    <CampLocation />
                </div >
                <Footer />
            </div >
        );
    }
}

export default FeedBack;
