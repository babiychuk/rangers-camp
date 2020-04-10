import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './AboutCamp.css';

import CampTermsBlock from "../CampTermsBlock/CampTermsBlock";

class AboutCamp extends React.Component {
    render() {
        return (
            <div className="block_about" name="about">

                <div>
                    <div className="title title_p">
                        <p><span className="title-about">Zoloche Rangers Camp</span></p>
                    </div>
                </div>
                <Container>
                    <Row className="row">
                        <Col md="12">
                            <div className="text_in_block bg_about">
                                <p className="">
                                    це унікальний комплекс відпочинку для дітей віком від 9 до 16 років виконаний в стилі Wild West
                                    на території якого заборонено мати поганий настрій. Табір розташований на березі озера Золоче, 
                                    поблизу котеджного містечка Riviare Zoloche. Затишний сосновий ліс, неймовірні пейзажі, 
                                    комфортні побутові умови та цікава насичена програма табору - все для найкращого дитячого відпочинку
                            </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="bg_6items" >
                    <CampTermsBlock />
                </div>
                
            </div>
        );
    }
}

export default AboutCamp;
