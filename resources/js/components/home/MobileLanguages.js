import React from 'react';

class MobileLanguages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textDisplay: false,
        }
    }

    ToggleButton() {
        this.setState((currentState) => ({
            textDisplay: !currentState.textDisplay,
        }));
    }

    render() {
        return (
            <div onClick={() => this.ToggleButton()} id="nav-toggle">
                {/*<img src="media/img/toggle.svg" alt="toggle"/>*/}
                {this.state.textDisplay && this.props.text}
            </div>
        );
    }
}

export default MobileLanguages;
