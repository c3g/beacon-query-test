import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './components/App';

// antd conflicts with strict mode
ReactDOM.render(<App />, document.getElementById('root'));
