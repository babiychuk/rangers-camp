import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Header from "../Header/Header";
import CampList from "../Blocks/CampList/CampList";
import CampTermsBlock from "../Blocks/CampTermsBlock/CampTermsBlock";
import ChangeBlock from "../Blocks/ChangeBlock/ChangeBlock";
import CampLocation from "../Blocks/CampLocation/CampLocation";
import TeamBlock from "../Blocks/TeamBlock/TeamBlock";
import Footer from "../Footer/Footer";

import './OneDay.css';
import img1 from "../../img/oneDay/08_00.jpg";
import img2 from "../../img/oneDay/10_15.jpg";
import img3 from "../../img/oneDay/14_00.jpg";
import img4 from "../../img/oneDay/16_00.jpg";
import img5 from "../../img/oneDay/19_00.jpg";
import img6 from "../../img/oneDay/21_45.jpg";


class OneDay extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <div>
                        <div className="title title_p p-t120">
                            <p><span className="page-title">День в таборі</span></p>
                        </div>
                    </div>
                    <Container className="m-b20">
                        <Row >
                            <Col xs="12" md="6">
                                <Row className="i-center m-b20 bg-grey">
                                    <Col md="6" className="day-time">
                                        <img src={img1} alt="Безпека rangers camp" />
                                        <div className="time-wrap"> 08:00-10:00</div>
                                    </Col>
                                    <Col md="6" className="t-just">
                                        <p className="day-title">Підготовка до подій дня: підйом, руханка, сніданок, шикування</p>
                                        <p>Кожен день розпочинається з енергійної музики, яка звучить у таборі.
                                        Після ранкових гігієнічних процедур ми відправляємось на ранкову руханку, яка буває спортивною чи танцювальною.
                                        Зранку у нас відбувається ранковий збір нашої групи, ми обираємо Чергового Рейнджера та відправляємося на Шикування за Тотемами минулого дня.
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs="12" md="6">
                                <Row className="i-center m-b20">
                                    <Col md="6" className="day-time">
                                        <img src={img2} alt="ПРОЖИВАННЯ rangers camp" />
                                        <div className="time-wrap"> 10:15-13:45</div>
                                    </Col>
                                    <Col md="6" className="t-just">
                                        <p className="day-title">Майстерні, спортивні ігри, туристичні випробування</p>
                                        <p>В цей час відбувається перший програмний блок і всі групи розходяться на локації на якій проводять 1-1,5 години.
                                        Одна група відправляється на одну з локацій екстим-зони, друга група на заняття з тематичні вміння, відповідно до тематики зміни і третя група відправляється на майстер-клас.
                                        В перерві між змінами локацій у нас відбувається другий сніданок.
                                        </p>
                                    </Col>

                                </Row>
                            </Col>
                        </Row>
                        <Row >
                            <Col xs="12" md="6">
                                <Row className="i-center m-b20">
                                    <Col md="6" className="day-time">
                                        <img src={img3} alt="Безпека rangers camp" />
                                        <div className="time-wrap"> 14:00-15:45</div>
                                    </Col>
                                    <Col md="6" className="t-just">
                                        <p className="day-title">Обід, тиха година, полуденок</p>
                                        <p>Смачний обід та відпочинок. Спати нікого не заставляють. Ми обираємо відпочинок чи вільне спілкування, головне, щоб ми набралися сил та спокійно відпочили. Можна відпочивати в будиночку та поспілкуватися з рідними телефоном, можна пограти в настільні ігри в ігровій чи просто відпочити на пуфах чи газоні у тіньку. А потім перекус та підготовка до другого програмного блоку.</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs="12" md="6">
                                <Row className="i-center m-b20 bg-grey">
                                    <Col md="6" className="day-time">
                                        <img src={img4} alt="ПРОЖИВАННЯ rangers camp" />
                                        <div className="time-wrap">16:00-19:00</div>
                                    </Col>
                                    <Col md="6" className="t-just">
                                        <p className="day-title">Басейн, активності, спортивні змагання, душ. Загонова діяльність, загальнотаборовий захід.</p>
                                        <p>При гарній погоді ми щодня відвідуємо басейн, після нього душ та підготовка до вечері і вечірньої програми.
                                        Але якщо погода прохолодна ми граємо у різноманітні ігри, беремо участь у квестах та проходимо різноманітні випробування.
                                        </p>
                                    </Col>

                                </Row>
                            </Col>
                        </Row>
                        <Row >
                            <Col xs="12" md="6">
                                <Row className="i-center m-b20 bg-grey">
                                    <Col md="6" className="day-time">
                                        <img src={img5} alt="Безпека rangers camp" />
                                        <div className="time-wrap"> 19:30-21:45</div>
                                    </Col>
                                    <Col md="6" className="t-just">
                                        <p className="day-title">Вечеря. Вечірні активності. Захід. Адехі. Дискотека / кінозал</p>
                                        <p>Після вечері наша група готується до вечірньої програми. Вони можуть бути найрізноманітнішими: творчі чи театральні вистави, конкурси, командні випробування, інтелектуальні ігри, вечірні кінозали під відкритим небом.
                                        Традицією табору є обрання Головного Рейнджера ввечері. Його обирають діти, це людина, яка проявила себе найкраще під час випробувань та всього дня, це людина, яка показала своїми діями, що на неї може покластися.
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs="12" md="6">
                                <Row className="i-center m-b20">
                                    <Col md="6" className="day-time">
                                        <img src={img6} alt="ПРОЖИВАННЯ rangers camp" />
                                        <div className="time-wrap"> 21:45-22:30</div>
                                    </Col>
                                    <Col md="6" className="t-just">
                                        <p className="day-title">Підсумки дня у загонах, друга вечеря, відбій</p>
                                        <p>Ми обов’язково підводимо підсумки дня своєю командою. Керівники груп для нас друзі, які допомагають зробити правильні висновки та стати завтра ще кращими, ще дружнішими, ще цілеспрямованими ніж ми були сьогодні.
                                        Обов’язково, всім табором ми відправляємося опускати прапор табору. Це робить новообраний Головний рейнджер.
                                        </p>
                                    </Col>

                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <CampTermsBlock />
                    <CampList />
                    <TeamBlock />
                    <ChangeBlock />
                    <CampLocation />
                </div >
                <Footer />
            </div >
        );
    }
}

export default OneDay;
