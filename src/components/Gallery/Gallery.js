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

import './Gallery.css';


import Img1 from "../../img/gallery/img1.jpg";
import Img2 from "../../img/gallery/img2.jpg";
import Img3 from "../../img/gallery/img3.jpg";
import Img4 from "../../img/gallery/img4.jpg";
import Img5 from "../../img/gallery/img5.jpg";
import Img6 from "../../img/gallery/img6.jpg";
import Img7 from "../../img/gallery/img7.jpg";
import Img8 from "../../img/gallery/img8.jpg";
import Img9 from "../../img/gallery/img9.jpg";
import Img10 from "../../img/gallery/img10.jpg";
import Img11 from "../../img/gallery/img11.jpg";
import Img12 from "../../img/gallery/img12.jpg";
import Img13 from "../../img/gallery/img13.jpg";
import Img14 from "../../img/gallery/img14.jpg";
import Img15 from "../../img/gallery/img15.jpg";
import Img16 from "../../img/gallery/img16.jpg";
import Img17 from "../../img/gallery/img17.jpg";
import Img18 from "../../img/gallery/img18.jpg";
import Img19 from "../../img/gallery/img19.jpg";
import Img20 from "../../img/gallery/img20.jpg";
import Img21 from "../../img/gallery/img21.jpg";
import Img22 from "../../img/gallery/img22.jpg";
import Img23 from "../../img/gallery/img23.jpg";
import Img24 from "../../img/gallery/img24.jpg";
import Img25 from "../../img/gallery/img25.jpg";
import Img26 from "../../img/gallery/img26.jpg";
import Img27 from "../../img/gallery/img27.jpg";
import Img28 from "../../img/gallery/img28.jpg";
import Img29 from "../../img/gallery/img29.jpg";
import Img30 from "../../img/gallery/img30.jpg";

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgs: [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19, Img20, Img21, Img22, Img23, Img24, Img25, Img26, Img27, Img28, Img29, Img30]
        };
    }
    render() {
        return (
            <div>
                <Header />
                <div>
                    <div>
                        <div className="title title_p p-t120">
                            <p><span className="page-title">Галерея Rangers Camp</span></p>
                        </div>
                    </div>
                    <Container className="m-b20">
                        <Row >
                            {this.state.imgs.map((img, num) => (
                                <Col xs="12" md="4" className="gallery-img">
                                    <img src={img} alt="галерея rangers camp" />
                                </Col>
                            ))}
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

export default Gallery;
