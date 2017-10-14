import React, { Component } from 'react';
import './SerialForm.css';

import handleSerial from '../../api/serial_api_handler.js'

class SerialForm extends Component {
    constructor(props) {
        super(props);

        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.handle(handleSerial(this.state.value));
        event.preventDefault();

        // document.getElementById("SerialForm-input").value = ""
        this.setState({value: ""});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="SerialForm-input" className="SerialForm-offscreen" value={this.state.value} onChange={this.handleChange} autoFocus autoComplete="off"/>
            </form>
        );
    }

    componentWillMount() {
        const script = document.createElement("script");
        const scriptText = document.createTextNode(`
            setInterval(function() {
                document.getElementById("SerialForm-input").focus();
            }, 500);
        `);

        script.appendChild(scriptText);
        document.head.appendChild(script);
    }
}

export default SerialForm;
