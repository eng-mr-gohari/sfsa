import React from 'react';
import SearchPage from "./SearchPage";
import Css from './SearchPageCss.css';
import Languages from "./Languages";

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {subject: '', instagram: '', email: '', phone: '', show: true, showPage: false, showInPage: false};
    }

    showHidePage() {
        const status = this.state.showPage;
        this.setState({showPage: !status})
    }

    renderPageShowBox(show) {
        if (show) {
            return (
                <div className="page-search-area">
                    <div className="page-search">
                        <div className="contact-section">
                            <div className="top-contact-box">
                                <div className="close-top-contact-box">
                                    <img src="media/img/close_ico.svg" alt="Close Search Box"
                                         onClick={() => this.showHidePage()}/>
                                </div>
                                <div className="language-top-contact-box">
                                    <Languages language="en"/>
                                </div>
                            </div>
                            <div className="contact-box">
                                <a href="mailto:info@sfsa.co.ir"><img src="media/img/email.svg" alt="email sfsa.co.ir"/></a>
                                <a href="https://www.instagram.com/sfsa.co/"><img src="media/img/instagram.svg"
                                                                                  alt="instagram sfsa.co.ir"/></a>
                                <a href="https://www.google.com/maps/place/%DA%A9%D8%A7%D8%B1%D8%AE%D8%A7%D9%86%D9%87+%D9%81%D9%88%D9%84%D8%A7%D8%AF+%D8%A7%D9%85%DB%8C%D8%B1%D8%A2%D8%A8%D8%A7%D8%AF%E2%80%AD/@36.8418197,53.3217758,15z/data=!4m5!3m4!1s0x0:0x5f3da390297efad9!8m2!3d36.8418197!4d53.3217758"><img
                                    src="media/img/location.svg"
                                    alt="location sfsa.co.ir"/></a>
                                <a href="tel:01134623701"><img src="media/img/call.svg"
                                                               alt="call sfsa.co.ir"/></a>
                            </div>
                        </div>
                        <div className="search-section">
                            <div className="input-box">
                                <input type="text" dir="auto" placeholder="Search ..." className="search-input"
                                       name="search"/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }

    renderShowSearch(show) {
        if (show) {
            return (
                <div className="search-item" onClick={() => this.showHidePage()}>
                    <img src="media/img/search.svg" alt="search"/>
                </div>
            );
        } else {
            return null;
        }
    }

    closeBox() {
        const status = this.state.showPage;
        this.setState({showPage: !status})
    }

    renderSearchPage(show) {
        if (show) {
            return (
                <div className="page-search-area">
                    <SearchPage click={this.closeBox}/>
                </div>
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <div>
                <div className="search-box">
                    {this.renderShowSearch(this.state.show)}
                    {this.renderSearchPage(this.state.showPage)}
                </div>

                {/*{this.renderPageShowBox(this.state.showPage)}*/}

            </div>
        );
    }

}

export default SearchBox;
