import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
import Style from "../style/city.less";
ReactDOM.render(<App cityNumber={3}/>, document.querySelector(".container"));