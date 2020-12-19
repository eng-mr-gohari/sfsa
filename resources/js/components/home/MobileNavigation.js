import React from 'react';
import ReactDOM from 'react-dom';
import LogoMobile from "./LogoMobile";
import ToggleButton from "./ToggleButton";
import Close from "./Close";

class MobileNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="navigation">
                <ToggleButton text={
                    <div className="navigation-menu">
                        <div className="navigation-item"><a href="#" className="navigation-link">HOME</a></div>
                        <div className="navigation-item"><a href="#" className="navigation-link">Sales & customers</a>
                        </div>
                        <div className="navigation-item"><a href="#" className="navigation-link">Buyers & suppliers</a>
                        </div>
                        <div className="navigation-item"><a href="#" className="navigation-link">News</a></div>
                        <div className="navigation-item"><a href="#" className="navigation-link">Contact Us</a></div>
                    </div>
                }/>
                <div id="logo-mobile-section">
                    <LogoMobile/>
                </div>
                {/*<Close/>*/}
            </div>

        );
    }
}

export default MobileNavigation;
