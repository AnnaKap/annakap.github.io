import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from './app'
import './styles/index.scss';

class Main extends Component {
    constructor() {
        super();


    }
    render() {
        return(<App/>);
    }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Main />, wrapper) : false;