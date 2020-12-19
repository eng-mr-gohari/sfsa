import React from 'react';

class Languages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentLanguage: "", showBox: false}
        // this.setState({currentLanguage: this.props.language})

    }

    componentWillMount() {
        this.setState({currentLanguage: this.props.language})
    }

    showHideBox(lang) {
        this.setState({currentLanguage: lang})
        const status = this.state.showBox;
        this.setState({showBox: !status})
    }

    showHideLang() {
        this.setState({currentLanguage: "en"})
        const status = this.state.showBox;
        this.setState({showBox: !status})
    }

    renderShowList(show) {
        if (show) {
            return (
                <div className="languages-list">
                    <div className="language" onClick={() => this.showHideBox("en")}>
                        <img src="media/img/langs/lang_en.svg" alt="English SFSA.CO.IR"/>
                    </div>
                    <div className="language" onClick={() => this.showHideBox("fa")}>
                        <img src="media/img/langs/lang_fa.svg" alt="Persian SFSA.CO.IR"/>
                    </div>
                    <div className="language" onClick={() => this.showHideBox("ar")}>
                        <img src="media/img/langs/lang_ar.svg" alt="Arabic SFSA.CO.IR"/>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }

    renderBox(language) {
        if (language == "en") {
            return (
                <div className="language" onClick={() => this.showHideBox()}>
                    <img src="media/img/langs/lang_en.svg" alt="English SFSA.CO.IR"/>
                </div>
            );
        } else if (language == "fa") {
            return (
                <div className="language" onClick={() => this.showHideBox()}>
                    <img src="media/img/langs/lang_fa.svg" alt="Persian SFSA.CO.IR"/>
                </div>
            );
        } else if (language == "ar") {
            return (
                <div className="language" onClick={() => this.showHideBox()}>
                    <img src="media/img/langs/lang_ar.svg" alt="Arabic SFSA.CO.IR"/>
                </div>
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <div className="languages-box">
                {this.renderBox(this.state.currentLanguage)}
                {this.renderShowList(this.state.showBox)}

            </div>
        );
    }
}

export default Languages;
