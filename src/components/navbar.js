import React, { Component } from 'react';
import '../styles/components/navbar.scss'

class Navbar extends Component {
    constructor() {
        super();
    }
    render(){
        const { changeRoute } = this.props;
        const routes = [
            {title: 'ANNA KAPLAN', route: 'Home'},
            // {title: 'CONTACT', route: 'Contact'},
            // {title: 'ABOUT', route: 'About'},
        ];
        return (
            <div className="nav-wrapper">
            <div className="navbar">
                {routes.map(r => (
                    <div className={`nav-item ${r.route}`} onClick={() => changeRoute(r.route)} key={r.route}>{r.title}</div>
                    )
                )}
            </div>
            </div>
        )
    }
}

export default Navbar;