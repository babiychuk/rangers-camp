import React from "react";

import Header from "../Header/Header";
import AboutCamp from "../Blocks/AboutCamp/AboutCamp";
import CampList from "../Blocks/CampList/CampList";
import DayTime from "../Blocks/DayTime/DayTime";
import ChangeBlock from "../Blocks/ChangeBlock/ChangeBlock";
import TeamBlock from "../Blocks/TeamBlock/TeamBlock";
import CampLocation from "../Blocks/CampLocation/CampLocation";
import Footer from "../Footer/Footer";

class AboutCampPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="p-t80">
                    <AboutCamp />
                    <CampList />
                    <DayTime />
                    <ChangeBlock />
                    <TeamBlock />
                    <CampLocation />
                </div>
                <Footer />
            </div>
        );
    }
}

export default AboutCampPage;
