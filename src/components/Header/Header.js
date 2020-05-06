import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Logo from "../../img/logo.png";
import './Header.css';

import joinToCamp from "../../img/joinToCamp.png";

class Header extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Navbar className="headerNav" expand="lg">
                    <Navbar.Brand className="brandLogo" href="#/">
                        <img className="logo" src={Logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="menu-navbar" />
                    <Navbar.Collapse id="menu-navbar">
                        <Nav className="menu">
                            <Nav.Link href="#/pro-tabir">Про табір</Nav.Link>
                            <Nav.Link href="#/zminy">Зміни</Nav.Link>
                            <Nav.Link href="#/umovy">Умови</Nav.Link>
                            <Nav.Link href="#/programa">День в таборі</Nav.Link>
                            <Nav.Link href="#/komanda">Команда</Nav.Link>
                            <Nav.Link href="#/halereya">Галерея</Nav.Link>
                            <Nav.Link href="#/vidhuky">Відгуки</Nav.Link>
                            <Nav.Link href="#/kontakty">Контакти</Nav.Link>
                            <Nav.Link href="#/park"><span className="green_color">Rangers Park</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="join-to-camp">
                    <a href="#/oformlennya-do-taboru">
                        <img src={joinToCamp} alt="Приеднайся до команды rangers camp" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Header;
