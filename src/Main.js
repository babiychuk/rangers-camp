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
                <Route exact path='/pro-tabir' component={AboutCampPage} /> 
                <Route exact path='/zminy' component={ChangePage} />                   
                <Route exact path='/life' component={Life} />  
                <Route exact path='/food' component={Food} />  
                <Route exact path='/five' component={Five} />  
                <Route exact path='/game' component={Game} />  
                <Route exact path='/galaxy' component={Galaxy} /> 
                <Route exact path='/programa' component={OneDay} />
                <Route exact path='/umovy' component={Terms} /> 
                <Route exact path='/komanda' component={Team} />
                <Route exact path='/vidhuky' component={FeedBack} />
                <Route exact path='/halereya' component={Gallery} />
                <Route exact path='/kontakty' component={Contacts} />
                <Route exact path='/park' component={Park} />  
                <Route exact path='/admin' component={AdminPanel} />                                
            </HashRouter>
        );
    }
}

export default Main;

