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

import './JoinToCamp.css';

import dogovir from "../../docs/dogovir.pdf";
import zayava from "../../docs/zayava.pdf";
import anketa from "../../docs/anketa.pdf";

class JoinToCamp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <div>
                        <div className="title title_p p-t120">
                            <p><span className="page-title">Оформлення до табору</span></p>
                        </div>
                        <Container>
                            <Row className="row">
                                <Col md="12">
                                    <div className="text_in_block bg_light_grey blue_color">
                                        <p><b>Документи для ознайомлення:</b></p>
                                        <ol>
                                            <li><a className="orange_color" target="_blank" rel="noopener noreferrer" href={dogovir}><u>Договір</u></a></li>
                                            <li><a className="orange_color" target="_blank" rel="noopener noreferrer" href={zayava}><u>Заява</u></a></li>
                                            <li><a className="orange_color" target="_blank" rel="noopener noreferrer" href={anketa}><u>Анкета</u></a></li>
                                        </ol>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row className="row">
                                <Col md="12">
                                    <div className="text_in_block bg_light_grey blue_color">
                                        <p className="">
                                            <p><b>Доброго дня!</b></p>
                                            <div className="t-indent"><b>Для оформлення дитини до табору просимо Вас виконати наступні дії.</b></div>
                                            <p className="t-indent"><b>1. Ознайомитися з Договором, умовами, Правилами нашого табору</b> (у вкладці листа).
                                            <div className="t-indent"><b><u>Просимо Вас визначити одну особу від родини, яка буде подавати заяву та документи, оформлювати та підписувати договір, проводити оплату.</u></b></div>
                                            </p>
                                            <p className="t-indent">
                                                <b>2. Заповнити заяву</b> для оформлення до табору. ЇЇ <b>необхідно прикріпити до Анкети.</b>
                                            </p>
                                            <p className="t-indent">
                                                <b>3. Підготувати документи, Ви будете вписувати дані у Анкету .</b>
                                                <ul>
                                                    <li>Паспорт замовника</li>
                                                    <li>Ідентифікаційний код</li>
                                                    <li>Свідоцтво про народження дитини</li>
                                                </ul>
                                            </p>
                                            <p className="t-indent">
                                                <b>4. Заповнити Анкету-заявку за посиланням</b>
                                                <div className="t-indent">
                                                    <a className="orange_color" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSe4bACfYc1XgTVeaf4J3ggUGnwEvPQK8xXJOQPT2lMUhZlSxQ/viewform?vc=0&c=0&w=1"><u>Анкета-заявка</u></a>
                                                </div>
                                            </p>
                                            <p className="t-indent">
                                                <b>5. Після цього ми надішлемо Вам рахунок для оплати путівки.</b>
                                                <div className="t-indent">Нагадуємо, рахунок діє лише три робочі дні. Сплатити його після завершення терміну не можливо.</div>
                                                <div className="t-indent">Кошти надходять на рахунок впродовж 2-3 робочих діб.</div>
                                            </p>
                                            <p className="t-indent">
                                                <b>6. Коли гроші надійдуть на рахунок, Ви отримаєте лист підтвердження та запрошення</b> отримати путівку та підписати Договір.
                                            </p>
                                            <p className="t-indent">
                                                <b>7. В офісі.</b>
                                                <div className="t-indent">Підпишете Договір (Друкувати не потрібно, він буде готовий з Вашими даними).</div>
                                                <div className="t-indent"> Отримаєте путівку <b><u>(Без путівки діти у табір не приймаються)</u></b></div>
                                            </p>
                                            <p className="t-indent">
                                                <b>8. В табір.</b>
                                                <div className="t-indent">Медична довідка 079 (оформлюється за три дні до табору (здається при оформленні у Табір)</div>
                                                <div className="t-indent">Анкета на дитину (здати заповнену або заповнити за посиланням <a className="orange_color" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLScvcYlqsrNxSx-ad4eI_iqeYrjVnQaaTwTXWicYy-_gnNibaQ/viewform"><u>Анкета на дитину</u></a>)</div>
                                            </p>
                                            <p className="t-indent">
                                                <b>Дякуємо! Ми раді, що Ваша дитина проведе літо у "Rangers camp".</b>
                                            </p>

                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>

                    </div>
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

export default JoinToCamp;
