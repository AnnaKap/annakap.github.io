import React, { Component } from 'react';
import '../styles/home.scss'
class Home extends Component {
    constructor() {
        super()
    }
    render() {
        const { changeRoute } = this.props
        return(
            <div className="home">
                <div>what I want to show you is my </div>
                <div className="sketch-dump">
                    <div>
                        <span className="upanddown">💩</span>
                        <span className="upanddownReverse">💩</span>
                        <span className="upanddown">💩</span>
                        <span className="upanddownReverse">💩</span>
                        <span className="upanddown">💩</span>
                        <span className="upanddownReverse">💩</span>
                        <span className="upanddown">💩</span>
                        <span className="upanddownReverse">💩</span></div>
                    <div>
                        <span className="upanddown">💩</span>
                        SKETCH DUMP
                        <span  className="upanddownReverse">💩</span>
                    </div>
                    <div>
                        <span className="upanddownReverse">💩</span>
                        <span className="upanddown">💩</span>
                        <span className="upanddownReverse">💩</span>
                        <span className="upanddown">💩</span>
                        <span className="upanddownReverse">💩</span>
                        <span className="upanddown">💩</span>
                        <span className="upanddownReverse">💩</span>
                        <span className="upanddown">💩</span></div>
                </div>
                <div>{'&'}</div>
                <div>here is a link to my</div>
                    <div onClick={() => changeRoute('Dev')}>
                        DEV PROJECTS 
                     </div>
            </div>
        );
    }
}

export default Home;