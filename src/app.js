import React, { Component } from "react";
import Navbar from './components/navbar';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Dev from './pages/dev';

class App extends Component {
    constructor() {
        super();
        this.state = {
            route: 'Home'
        }
        this.changeRoute = this.changeRoute.bind(this);

    }
    changeRoute(route) {
        this.setState({ route })
    }
    renderRoute() {
        const { route, changeRoute } = this.state
        switch(route) {
            case 'Home': 
               return <Home changeRoute={this.changeRoute}/>
            case 'Contact':
                return <Contact />
            case 'About':
                return <About />
            case 'Dev':
                return <Dev />
            default:
                return <Home changeRoute={this.changeRoute}/>
        }
    }
    render() {
        return (
            <>
            <Navbar changeRoute={this.changeRoute}/>
            {/* <div>Anna Kaplan</div> */}
            {this.renderRoute()}
            </>
        )
    }
}

export default App;