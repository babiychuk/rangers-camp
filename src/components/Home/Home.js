import React from "react";
import Header from "../Header/Header";
import FirstBlock from "../FirstBlock/FirstBlock";
import AboutCamp from "../Blocks/AboutCamp/AboutCamp";
import CampChange from "../Blocks/CampChangeBlock/CampChange";
import CampList from "../Blocks/CampList/CampList";
import CampTermsBlock from "../Blocks/CampTermsBlock/CampTermsBlock";
import DayTime from "../Blocks/DayTime/DayTime";
import TeamBlock from "../Blocks/TeamBlock/TeamBlock";
import CampLocation from "../Blocks/CampLocation/CampLocation";
import Footer from "../Footer/Footer";

import './Home.css';
import '../../style/css/media.css'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <FirstBlock />
                <AboutCamp /> 
                <CampChange /> 
                <CampList />
                <CampTermsBlock />
                <DayTime />
                <TeamBlock />
                <CampLocation />              
                <Footer />
            </div>
        );
    }
}

export default Home;
