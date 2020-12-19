import React from 'react';
import Languages from "./Languages";

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showBox: true,show:true};
    }

    // componentDidMount() {
    //     this.setState({showBox: true});
    // }

    showHideBox() {
        const status = this.state.showBox;
        this.setState({showBox: !status});
    }

    renderShowBox(show) {
        if (show) {
            return (
                <div className="page-search">
                    <div className="contact-section">
                        <div className="top-contact-box">
                            <div className="close-top-contact-box">
                                <img src="media/img/close_ico.svg" alt="Close Search Box"
                                     onClick={this.showHideBox(this.props.click)}/>
                            </div>
                            <div className="language-top-contact-box">
                                <Languages language="en"/>
                            </div>
                        </div>
                        <div className="contact-box">
                            <a href="mailto:info@sfsa.co.ir"><img src="media/img/email.svg" alt="email sfsa.co.ir"/></a>
                            <a href="mailto:info@sfsa.co.ir"><img src="media/img/instagram.svg"
                                                                  alt="instagram sfsa.co.ir"/></a>
                            <a href="mailto:info@sfsa.co.ir"><img src="media/img/location.svg"
                                                                  alt="location sfsa.co.ir"/></a>
                            <a href="mailto:info@sfsa.co.ir"><img src="media/img/call.svg" alt="call sfsa.co.ir"/></a>
                        </div>
                    </div>
                    <div className="search-section">
                        <div className="input-box">
                            <input type="text" dir="auto" placeholder="Search ..." className="search-input"
                                   name="search"/>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <div>
                {this.renderShowBox(this.state.show)}
            </div>
        )
    }

}

export default SearchPage;
