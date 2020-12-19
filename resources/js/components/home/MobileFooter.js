import React from 'react';
import ReactDOM from 'react-dom';

class MobileFooter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer-box">
                <div className="footer-icon"><a href="#" className="footer-icon-link">
                    <img src="media/img/mobile_home.svg" alt="HOME MOBILE"/>
                </a></div>
                <div className="footer-icon"><a href="#" className="footer-icon-link">
                    <img src="media/img/mobile_search.svg" alt="SEARCH MOBILE"/>
                </a></div>
                <div className="footer-icon"><a href="#" className="footer-icon-link">
                    <img src="media/img/mobile_about.svg" alt="ABOUT MOBILE"/>
                </a></div>
            </div>
        );
    }
}

export default MobileFooter;
