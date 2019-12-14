import React, { Component, Fragment } from 'react';
import Header from './components/sidebar/header';
import MenuIcon from './image/menu.png';
import Button from './components/tags/button';

export default class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            sidebarIsOpen: false
        };
        this.handleSidebar = this.handleSidebar.bind(this);
    }

    handleSidebar(status) {
        this.setState({
            sidebarIsOpen: status
        });
    }

    render() {
        return (
            <Fragment>
                <Header isopen={ this.handleSidebar } open={this.state.sidebarIsOpen} />
                <Button 
                    class={ 'openMenu' }
                    icon={ MenuIcon }
                    isopen={ this.handleSidebar }
                    text={ 'open_the_menu' }
                />
            </Fragment>
        )
    }
}
