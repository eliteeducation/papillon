import React from "react";
import {withRouter, NavLink} from "react-router-dom";


class ClientTabs extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: (props.location.state && props.location.state.clientId) ? 'clientDetails' : ( props.location.pathname.endsWith("/create") ? 'createClient' : 'clientsList')
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
        const {state} = this.props.location;
        return (<nav className="navbar">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a name="clientsList" className={`nav-link ${this.active("clientsList")}`}
                       onClick={this.onTabSelected("clientsList")} href={`${match.path}/`}>Clients</a>
                </li>
                <li className="nav-item">
                    <a name="createClient" className={`nav-link ${this.active("createClient")}`}
                       onClick={this.onTabSelected("createClient")}
                       href={`${match.path}/create`}>Nouveau</a>
                </li>
                {state &&
                <li id="clientDetailsTab" className="nav-item">
                    <div name="clientDetails" className={`nav-link ${this.active("clientDetails")}`}
                         onClick={this.onTabSelected("clientDetails")}>Détails Famille : {state.lastName}
                    </div>
                </li>
                }
            </ul>
        </nav>)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let activeTab = prevState.activeTab;
        if(nextProps.location.state && nextProps.location.state.clientId){
            activeTab = 'clientDetails';
        }
        return {
            ...nextProps.location.state, activeTab
        }
    }
}
;
export default withRouter(ClientTabs);