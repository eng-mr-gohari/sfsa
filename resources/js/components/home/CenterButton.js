import React from "react";
import Faker from "faker/locale/fa";
import SmallBox from "./SmallBox";

class CenterButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showBox: false}
    }

    click() {
        const box = (
            <div className="popup-box">
                <h2>{Faker.lorem.sentence}</h2>
                <div className="context-popup text-justify">{Faker.lorem.words}</div>
            </div>
        );
    }

    showHideBox() {
        const status = this.state.showBox;
        this.setState({showBox: !status})
    }

    renderBox(show) {
        if (show) {
            return (
                <div className="popup-box">
                    <div className="row">
                        <img src="media/img/cancel.svg" onClick={() => this.showHideBox()} alt="close box"
                             className="popup-close-box-icon"/>
                        <h2 className="title-popup-box">Welcome to Sanaye Foolad Sazan Amir Abad</h2>
                    </div>
                    <p className="lead context-popup text-justify">
                        Greetings and respect to the loved ones, especially all the hard-working craftsmen and their patient families
                        Hope that by the grace of God, the great nation of Iran will be successful and proud in all areas,
                        especially the development and progress of dear Iran. Undoubtedly, this will be achieved with the efforts and will of Poladin.
                        Amirabad Steel Industries Company's approach in modern thinking,
                        increasing exports and emphasizing the completion of the value chain in this industry along with supporting the integrated and
                        balanced development of intermediate and downstream industries,
                        as well as creating and increasing more diversity in products and enhancing the value of the product portfolio Interaction and
                        partnership with all real and legal persons active in this industry is valuable
                    </p>
                    <div className="row margin-left-right-x15 justify-content-between">
                        <SmallBox link="#" subject="After-sales Services"/>
                        <SmallBox link="#" subject="Strengths Company"/>
                        <SmallBox link="#" subject="Collection Goals"/>
                        <SmallBox link="#" subject="Collection management"/>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }


    render() {
        return (
            <div className="flex w-100 flex-row justify-content-center">
                <div id="center_button" onClick={() => this.showHideBox()}>
                    <svg data-name="Component 1 – 25" xmlns="http://www.w3.org/2000/svg" width="62" height="62"
                         viewBox="0 0 62 62">
                        <rect id="Rectangle_36" data-name="Rectangle 36" fill="#ffffff" width="62" height="62" rx="31"/>
                        <g id="plus" transform="translate(18.847 18.847)">
                            <g id="Group_106" data-name="Group 106">
                                <path id="Path_421" data-name="Path 421" fill="#252a6e"
                                      d="M23.686,11.362h-10.4V.963a.963.963,0,0,0-1.926,0v10.4H.963a.963.963,0,0,0,0,1.926h10.4v10.4a.963.963,0,0,0,1.926,0v-10.4h10.4a.963.963,0,0,0,0-1.926Z"/>
                            </g>
                        </g>
                    </svg>
                </div>
                {this.renderBox(this.state.showBox)}

            </div>

        );
    }
}

export default CenterButton;
