import React from 'react';
import ReactDOM from 'react-dom';
import Presentation from './presentation';
import registerServiceWorker from './registerServiceWorker';
import './style.css';

ReactDOM.render(<Presentation />, document.getElementById('root'));
registerServiceWorker();
