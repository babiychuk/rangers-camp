import React from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './CampLocation.css';



import MapRangers from "../../../img/map-rangers.jpg";

const mapStyles = {
    width: '100%',
    height: '100%',
    position: 'relative'
};

const CampLocation = ({ google }) => {
    return (


        <Row className="m20">
            <Col xs="12" md="12">
                    <p className="m20-0 t-center block-title">МАПА ПІДЛІТКОВОГО ТАБОРУ <span className="light_green_color">ZOLOCHE RANGERS CAMP</span> </p>
            </Col>
            <Col md="8">
                <img src={MapRangers} alt="map rangers" className="map-rangers" />
            </Col>

            <Col md="4" id="mapBox">
                <Map
                    google={google}
                    zoom={15}
                    style={mapStyles}
                    initialCenter={{
                        lat: 50.282503,
                        lng: 30.699345
                    }}
                >
                    <Marker
                        label="Zoloche Rangers Camp"
                        position={{ lat: 50.279061, lng: 30.698106 }}
                        name={'Kenyatta International Convention Centre'}
                    >
                        <InfoWindow visible={true} name={'Kenyatta International Convention Centre'} >
                            <h1>Zoloche Rangers Camp</h1>
                        </InfoWindow>
                    </Marker>
                </Map>
            </Col>
        </Row>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyC7T3mV4AaEg3jaHsDRGN1B2IbhTgL28Mc'
})(CampLocation);
