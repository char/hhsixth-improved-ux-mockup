import React, { Component } from 'react';
import './App.css';

import warning_yellow from "../../assets/warning_yellow.png"
import cross_red from "../../assets/cross_red.svg"

import SerialForm from "../SerialForm/SerialForm.js";

import classNames from "classnames";

class App extends Component {
    constructor(props) {
        super(props);

        this.handleSerial = this.handleSerial.bind(this);
        this.state = {
            "status": "idle",
            "counter": 0
        };
    }

    handleSerial(p) {
        p.then((response) => {
            let result = JSON.parse(response);

            console.log("status: " + result.status);

            this.setState({
                status: result.status,
                name: result.name,
                counter: this.state.counter + 1
            });

            let that = this;

            let counter = this.state.counter;
            setTimeout(function() {
                if (that.state.counter === counter) {
                    that.setState({
                        "status": "idle",
                        "counter": that.state.counter
                    });
                }
            }, 30000);
        });
    }

    render() {
        let idleHeader =
            <div className="App-header">
                <img src="copyrighted_assets/hhlogo.png" className="App-logo" alt="logo" />
                <h1 className="App-title">Hardenhuish Sixth Form</h1>
                
                <p>Please scan your card to sign in / out.</p>
            </div>

        let invalidHeader = 
            <div className="App-header">
                <img src={warning_yellow} className="App-logo" alt="logo" />
                <h1 className="App-title">Card read incorrectly.</h1>

                <p>If the problem persists, please obtain a new card from the Finance Office.</p>
            </div>
        
        let signedInHeader =
            <div className="App-header">
                <p className="App-logo"><span role="img" aria-label="Check mark">✅</span></p>
                <h1 className="App-title">{this.state.name}</h1>
                <p>Signed in.</p>
            </div>
        
        let signedOutHeader =
            <div className="App-header">
                <img src={cross_red} className="App-logo" alt="logo" />
                <h1 className="App-title">{this.state.name}</h1>
                <p>Signed out.</p>
            </div>

        return (
            <main>
                <div className="App">
                    <div className={ classNames("App-content", `App-status-${this.state.status}`) }>
                        { this.state.status === 'idle' && idleHeader }
                        { this.state.status === 'invalid' && invalidHeader }
                        { this.state.status === 'signed_in' && signedInHeader }
                        { this.state.status === 'signed_out' && signedOutHeader }
                        <div className="App-form">
                            <SerialForm handle={this.handleSerial} />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default App;
