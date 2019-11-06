import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './components/app/main.js';
import MainForms from './components/forms/main.js';


if (document.getElementById('app')) {
    ReactDOM.render(<MainApp />, document.getElementById('app'));
}
if (document.getElementById('form')) {
    ReactDOM.render(<MainForms />, document.getElementById('form'));
}

