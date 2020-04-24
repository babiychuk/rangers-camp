import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './AboutCamp.css';

class AboutCamp extends React.Component {
    render() {
        return (
            <div className="block_about" name="about">

                <div>
                    <div className="title title_p">
                        <p><span className="page-title">Про табiр</span></p>
                    </div>
                </div>
                <Container>
                    <Row className="row">
                        <Col md="12">
                            <div className="text_in_block brown-color">
                                <p className="">
                                    Неподалік міста, у затишному куточку Київської області,
                                    серед неповторної природи, створено місце для щасливих дітей!
                                    Табір дарує найяскравіший відпочинок для дітей від 8 до 16 років.
                                    Програма включає в себе ексклюзивні підходи,
                                    кожна зміна є унікальною за тематикою.
                                    Ми змогли об’єднати природу та комфорт, екстрим та безпеку
                                    та будуємо дружні стосунки з кожною дитиною, яка відпочиває у нас.
                            </p>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default AboutCamp;
