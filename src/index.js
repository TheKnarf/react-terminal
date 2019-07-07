import ReactDOM from 'react-dom';
import React from 'react';
import Terminal from './terminal.jsx';

const root = document.createElement('div');
document.body.appendChild(root);

const App = () =>
	<Terminal> Test </Terminal>;

ReactDOM.render(<App />, root);
