import React from "react";
import { Route, HashRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutCampPage from  "./components/AboutCampPage/AboutCampPage";
import ChangePage from  "./components/ChangePage/ChangePage";
import Life from "./components/CampChange/Life/Life";
import Food from "./components/CampChange/Food/Food";
import Five from "./components/CampChange/Five/Five";
import Game from "./components/CampChange/Game/Game";
import Galaxy from "./components/CampChange/Galaxy/Galaxy";
import OneDay from "./components/OneDay/OneDay";
import Terms from "./components/Terms/Terms";
import Team from "./components/Team/Team";
import FeedBack from "./components/FeedBack/FeedBack";
import Gallery from "./components/Gallery/Gallery";
import Contacts from "./components/Contacts/Contacts";
import Park from "./components/Park/Park";
import AdminPanel from "./components/AdminPanel/AdminPanel";



class Main extends React.Component {
    render() {
        return (
            <HashRouter basename='/'>
                <Route exact path='/' component={Home} /> 
                <Route exact path='/about' component={AboutCampPage} /> 
                <Route exact path='/change' component={ChangePage} />                   
                <Route exact path='/life' component={Life} />  
                <Route exact path='/food' component={Food} />  
                <Route exact path='/five' component={Five} />  
                <Route exact path='/game' component={Game} />  
                <Route exact path='/galaxy' component={Galaxy} /> 
                <Route exact path='/program' component={OneDay} />
                <Route exact path='/terms' component={Terms} /> 
                <Route exact path='/team' component={Team} />
                <Route exact path='/feedback' component={FeedBack} />
                <Route exact path='/gallery' component={Gallery} />
                <Route exact path='/contacts' component={Contacts} />
                <Route exact path='/park' component={Park} />  
                <Route exact path='/admin' component={AdminPanel} />                                
            </HashRouter>
        );
    }
}

export default Main;

