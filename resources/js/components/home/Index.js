import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from "./Navigation";
import LogoDesktop from "./LogoDesktop";
import MediaQuery from 'react-responsive'
import MobileNavigation from "./MobileNavigation";
import MobileFooter from "./MobileFooter";
import MainTitle from "./MainTitle";
import CarouselPage from "./CarouselPage";
import CenterButton from "./CenterButton";

function Index() {
    return (
        <div id="main">
            <div id="left-item">
                <MediaQuery minWidth={769}>
                    <Navigation/>
                </MediaQuery>
                <MediaQuery maxWidth={768}>
                    <MobileNavigation/>
                </MediaQuery>
                <MediaQuery minWidth={769}>
                    <CarouselPage/>
                </MediaQuery>
            </div>
            <div id="right-item">
                <MediaQuery minWidth={769}>
                    <LogoDesktop/>
                </MediaQuery>
                <MediaQuery maxWidth={768}>
                    <MainTitle/>
                </MediaQuery>
                <MediaQuery maxWidth={768}>
                    <CarouselPage/>
                </MediaQuery>
            </div>
            <MediaQuery maxWidth={768}>
                <MobileFooter/>
            </MediaQuery>
            <CenterButton/>
        </div>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index/>, document.getElementById('index'));
}
