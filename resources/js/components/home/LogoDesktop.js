import React from 'react';
import ReactDOM from 'react-dom';

class LogoDesktop extends React.Component {
    render() {
        return (
            <div id="logo">
                <div className="logo-desktop">
                    <img src="media/img/logo_desktop.svg" alt="لوگوی صنایع فولادسازان امیرآباد"/>
                </div>
                <div className="header-text">
                    <h1 className="left-header">Amirabad</h1>
                    <h2 className="center-header"><b>Steel Manufacturers</b> Industries</h2>
                </div>
            </div>
        );
    }
}

export default LogoDesktop;
