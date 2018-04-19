import React from "react";
import {withRouter} from "react-router-dom";


class ClientNav extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: props.location.pathname.endsWith("/create") ? 'createClient' : 'clientsList'
        }
    }

    onTabSelected = tabName=>event=> {
        event.preventDefault();
        this.setState({activeTab: tabName});
    }

    active = tabName=> {
        const {activeTab} = this.state;
        if (activeTab === tabName) return "active";
        return ""
    }


    render() {
        const {match} = this.props;
        return (<nav className="navbar">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a name="clientsList" className={`nav-link ${this.active("clientsList")}`}
                       onClick={e=>this.onTabSelected("clientsList")} href={`${match.path}/`}>Clients</a>
                </li>
                <li className="nav-item">
                    <a name="createClient" className={`nav-link ${this.active("createClient")}`}
                       onClick={e=>this.onTabSelected("createClient")}
                       href={`${match.path}/create`}>Nouveau</a>
                </li>

                <li id="clientDetailsTab" className="nav-item d-none">
                    <div name="clientDetails" className={`nav-link ${this.active("clientDetails")}`}
                       onClick={e=>this.onTabSelected("clientDetails")}>Détails</div>
                </li>
            </ul>
        </nav>)
    }
}
;
export default withRouter(ClientNav);