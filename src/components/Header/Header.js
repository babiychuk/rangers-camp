import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Logo from "../../img/logo.png";
import './Header.css';

class Header extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Navbar className="headerNav" expand="lg">
                <Navbar.Brand className="brandLogo" href="#/">
                    <img className="logo" src={Logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="menu-navbar" />
                <Navbar.Collapse id="menu-navbar">
                    <Nav className="menu">                    
                        <Nav.Link href="#/about">Про табір</Nav.Link>
                        <NavDropdown href="hotel" title="Зміни" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#/life">Life</NavDropdown.Item>
                            <NavDropdown.Item href="#/food">Food</NavDropdown.Item>
                            <NavDropdown.Item href="#/five">Five</NavDropdown.Item>                            
                            <NavDropdown.Item href="#/game">Game</NavDropdown.Item>
                            <NavDropdown.Item href="#/galaxy">Galaxy</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#/program">Один день в таборі</Nav.Link>
                        <Nav.Link href="#/terms">Умови</Nav.Link>
                        <Nav.Link href="#/team">Команда</Nav.Link>
                        <Nav.Link href="#/feedback">Відгуки</Nav.Link>                        
                        <Nav.Link href="#/gallery">Галерея</Nav.Link>
                        <Nav.Link href="#/contacts">Контакти</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
