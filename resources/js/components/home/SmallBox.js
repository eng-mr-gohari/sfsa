import React from 'react';

class SmallBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {subject: '', link: ''};
    }

    componentDidMount() {
        this.setState({subject: this.props.subject, link: this.props.link})
    }

    render() {
        return (
            <div className="col-st-2">
                <a href={this.state.link}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">
                                {this.state.subject}
                            </h5>
                        </div>
                    </div>
                </a>
            </div>
        );
    }

}

export default SmallBox;
