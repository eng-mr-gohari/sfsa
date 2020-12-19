import React from 'react';

class Close extends React.Component {
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
            <div onClick={() => this.ToggleButton()} className="close-box">
                <img src="media/img/close.svg" alt="Close Item"/>
                {this.state.textDisplay && this.props.text}
            </div>
        );
    }
}

export default Close;
