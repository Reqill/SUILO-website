import React from 'react'
import '../styles/App.css';
import logo from '../images/Logo SU sygnet.svg';
import logotype from '../images/logotyp su.svg'

export default class NavBar extends React.Component {

    changeStyle = (input) => {
        if (input === this.props.currentPage)
            return { color: "#f58f0b" }
        else {
            return { color: "#333333" }
        }
    }


    render() {
        return (
            <div className="nav-container" >
                <div className="nav-logo">
                    <img src={logo} className="su-logo" />
                    <img src={logotype} className="su-logotype" />
                </div>
                <div className="nav-scroll">
                    <div className="nav-element">
                        <button type="button" className="nav-button" onClick={() => this.props.selectDestination("_HOME_")}>
                            <p className="nav-index" style={this.changeStyle("_HOME_")}>Strona Główna</p>
                        </button>
                    </div>
                    <div className="nav-element">
                        <button className="nav-button" onClick={() => this.props.selectDestination("_NEWS_")}>
                            <p className="nav-index" style={this.changeStyle("_NEWS_")}>Aktualności</p>
                        </button>
                    </div>
                    <div className="nav-element">
                        <button className="nav-button" onClick={() => this.props.selectDestination("_TOURNAMENT_")}>
                            <p className="nav-index" style={this.changeStyle("_TOURNAMENT_")}>Kiermasz</p>
                        </button>
                    </div>
                    <div className="nav-element">
                        <button className="nav-button" onClick={() => this.props.selectDestination("_CONTACT_")}>
                            <p className="nav-index" style={this.changeStyle("_CONTACT_")}>Kontakt</p>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}