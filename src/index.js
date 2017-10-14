import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import backgroundFade from "./background-fade.js"

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

backgroundFade();
setInterval(backgroundFade, 10000);