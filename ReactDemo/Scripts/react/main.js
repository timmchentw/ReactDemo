import React from 'react';
import ReactDOM from 'react-dom';
import App from './jsx/index.jsx';
import InputText from './jsx/forms.jsx';


if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
if (document.getElementById('form')) {
    ReactDOM.render(<InputText />, document.getElementById('form'));
}

