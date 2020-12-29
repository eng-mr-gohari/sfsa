import React from 'react';
import Languages from "./Languages";
import SearchBox from "./SearchBox";

class Navigation extends React.Component {
    render() {
        return (
            <div id="navigation">
                <div className="navigation-menu">
                    <div className="navigation-item"><a href="#" className="navigation-link">HOME</a></div>
                    <div className="navigation-item"><a href="#" className="navigation-link">Sales & customers</a></div>
                    <div className="navigation-item"><a href="#" className="navigation-link">Buyers & suppliers</a>
                    </div>
                    <div className="navigation-item"><a href="#" className="navigation-link">News</a></div>
                    <div className="navigation-item"><a href="#" className="navigation-link">Contact Us</a></div>
                </div>
                <Languages language="en"/>
                <SearchBox show="true"/>
            </div>
        );
    }
}

export default Navigation;

// if (document.getElementById('index')) {
//     ReactDOM.render(<Index />, document.getElementById('index'));
// }
